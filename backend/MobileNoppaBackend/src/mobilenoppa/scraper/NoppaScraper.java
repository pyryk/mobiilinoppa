package mobilenoppa.scraper;
import java.io.IOException;
import java.util.*;

import mobilenoppa.model.*;

import org.jsoup.Jsoup;
import org.jsoup.nodes.*;
import org.jsoup.select.Elements;

public class NoppaScraper {

	// --------------------------------------------------------------------------
	// Public API
	// --------------------------------------------------------------------------
	
	public static AllResults getAll(String courseID) {
		Document frontPage, lecturesPage;
		try {
			frontPage = getFrontPage(courseID);
			lecturesPage = getLecturesPage(courseID);
		}
		catch (IOException e) {
			return new AllResults();
		}
		
		AllResults results = new AllResults();
		results.name = getCourseName(courseID);
		results.lectures = getLectures(frontPage, lecturesPage);
		results.exams = getExams(frontPage);
		results.exerciseGroups = getExerciseGroups(frontPage);
		results.assignments = getAssignments(frontPage);
		
		return results;
	}
	
	public static List<Event> getLectures(String courseID) {
		Document frontPage, lecturesPage;
		try {
			frontPage = getFrontPage(courseID);
			lecturesPage = getLecturesPage(courseID);
		}
		catch (IOException e) {
			return Collections.emptyList();
		}
		
		return getLectures(frontPage, lecturesPage);
	}
	
	public static List<Event> getExams(String courseID) {
		Document frontPage;
		try {
			frontPage = getFrontPage(courseID);
		}
		catch (IOException e) {
			return Collections.emptyList();
		}
		
		return getExams(frontPage);
	}
	
	public static List<Event> getExerciseGroups(String courseID) {
		Document frontPage;
		try {
			frontPage = getFrontPage(courseID);
		}
		catch (IOException e) {
			return Collections.emptyList();
		}
		
		return getExerciseGroups(frontPage);
	}
	
	public static List<Event> getAssignments(String courseID) {
		Document frontPage;
		try {
			frontPage = getFrontPage(courseID);
		}
		catch (IOException e) {
			return Collections.emptyList();
		}
		
		return getAssignments(frontPage);
	}
	
	public static String getCourseName(String courseID) {
		Document frontPage;
		try {
			frontPage = getFrontPage(courseID);
		}
		catch (IOException e) {
			return "";
		}
		
		return getCourseName(frontPage);
	}

	// --------------------------------------------------------------------------
	// Implementation
	// --------------------------------------------------------------------------
	
	private static List<Event> getLectures(Document frontPage, Document lecturesPage) {
		if (!getLecturesExist(frontPage)) return Collections.emptyList();
		
		List<Event> lectures = new ArrayList<Event>();
		
		Elements lecturesTableRows = lecturesPage.select("table#leView > tbody > tr");
		
		for (Iterator<Element> it = lecturesTableRows.iterator(); it.hasNext();) {
			Element tr = it.next();
			String trClass = tr.className();
			boolean lectureTr = trClass.equals("even") || trClass.equals("odd");
			if (!lectureTr) break;
			Element lectureDescrTr = it.next();
			Event lecture = parseLecture(tr, lectureDescrTr);
			lectures.add(lecture);
		}
		
		return lectures;
	}
	
	private static boolean getLecturesExist(Document frontPage) {
		//Elements result = frontPage.select("div#courseNaviContainer div:not(.separator) a:matches(Lectures|Luennot)");
		Elements result = frontPage.select("div#courseNaviContainer div:not(.separator) a:matches(Lectures|Luennot)");
		return !result.isEmpty();
	}
	
	private static Event parseLecture(Element lectureTr, Element lectureDescrTr) {
		Event lecture = new Event();
		lecture.date = lectureTr.child(0).text(); // "24 Jan 12"
		// child(1) = week, child(2) = day
		lecture.duration = lectureTr.child(3).text(); // "16:15-18:00"
		lecture.location = lectureTr.child(4).text(); // "T5"
		lecture.title = lectureTr.child(5).text(); // "General arrangements"
		lecture.description = lectureDescrTr.child(0).text();
		
		return lecture;
	}
	
	private static List<Event> getExams(Document frontPage) {
		Elements examsTableRows = frontPage.select("h2:matches(Tentit*|Exams*) + table tr");

		List<Event> exams = new ArrayList<Event>();
		
		for (Element tr : examsTableRows) {
			Event exam = parseExam(tr);
			exams.add(exam);
		}
		
		return exams;
	}
	
	private static Event parseExam(Element tr) {
		Event exam = new Event();
		// child(0) = day of the week
		exam.date = tr.child(1).text();
		exam.duration = tr.child(2).text();
		exam.location = tr.child(3).text();
		exam.title = tr.child(4).text();
		
		return exam;
	}
	
	private static List<Event> getExerciseGroups(Document frontPage) {
		Elements exerciseGroupsTableRows = frontPage.select("h2:matches(Harjoitusryhmät|Exercise groups) + table tr");

		List<Event> exerciseGroups = new ArrayList<Event>();
		
		for (Element tr : exerciseGroupsTableRows) {
			Event exerciseGroup = parseExerciseGroup(tr);
			exerciseGroups.add(exerciseGroup);
		}
		
		return exerciseGroups;
	}
	
	private static Event parseExerciseGroup(Element tr) {
		Event exerciseGroup = new Event();
		// TODO parse for real
		exerciseGroup.title = tr.text();
		exerciseGroup.description = "Exercise groups are WIP!";
		
		return exerciseGroup;
	}
	
	private static List<Event> getAssignments(Document frontPage) {
		Elements assignmentsTableRows = frontPage.select("h2:matches(Harjoitustöiden DL:t|Assignment deadlines) + table tr");

		List<Event> assignments = new ArrayList<Event>();
		
		for (Element tr : assignmentsTableRows) {
			Event assignment = parseAssignment(tr);
			assignments.add(assignment);
		}
		
		return assignments;
	}
	
	private static Event parseAssignment(Element tr) {
		Event assignment = new Event();
		// child(0) = day of the week
		assignment.date = tr.child(1).text();
		// child(2) = due time
		// TODO merge due time with due date!
		assignment.title = tr.child(3).text();
		
		return assignment;
	}
	
	private static String getCourseName(Document frontPage) {
		Elements titleElem = frontPage.select("title");
		String titleStr = titleElem.text();
		String[] tokens = titleStr.split("-");
		tokens[1] = tokens[1].trim();
		String title = tokens[0] + "-" + tokens[1];

		return title;
	}

	private static Document getFrontPage(String courseID) throws IOException {
		return getDocument(String.format("https://noppa.aalto.fi/noppa/kurssi/%s/etusivu", courseID));
	}
	
	private static Document getLecturesPage(String courseID) throws IOException {
		return getDocument(String.format("https://noppa.aalto.fi/noppa/kurssi/%s/luennot", courseID));
	}
	
	private static Document getDocument(String url) throws IOException {
		return Jsoup.connect(url)
			.userAgent("Noppa Scraper")
			//.data("param", "value")
			.get();
	}
}
