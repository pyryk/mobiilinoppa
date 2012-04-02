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
		
		List<CourseItem> courseItems = new ArrayList<CourseItem>();
		courseItems.addAll(getLectures(frontPage, lecturesPage));
		courseItems.addAll(getExams(frontPage));
//		courseItems.addAll(getExerciseGroups(frontPage));
		courseItems.addAll(getAssignments(frontPage));
		
		AllResults results = new AllResults();
		results.name = getCourseName(courseID);
		results.courseItems = courseItems;
		
		return results;
	}
	
	public static List<Lecture> getLectures(String courseID) {
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
	
	public static List<Exam> getExams(String courseID) {
		Document frontPage;
		try {
			frontPage = getFrontPage(courseID);
		}
		catch (IOException e) {
			return Collections.emptyList();
		}
		
		return getExams(frontPage);
	}
	
	public static List<Assignment> getAssignments(String courseID) {
		Document frontPage;
		try {
			frontPage = getFrontPage(courseID);
		}
		catch (IOException e) {
			return Collections.emptyList();
		}
		
		return getAssignments(frontPage);
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
	
	private static List<Lecture> getLectures(Document frontPage, Document lecturesPage) {
		if (!getLecturesExist(frontPage)) return Collections.emptyList();
		
		List<Lecture> lectures = new ArrayList<Lecture>();
		
		Elements lecturesTableRows = lecturesPage.select("table#leView > tbody > tr");
		
		for (Iterator<Element> it = lecturesTableRows.iterator(); it.hasNext();) {
			Element tr = it.next();
			String trClass = tr.className();
			boolean lectureTr = trClass.equals("even") || trClass.equals("odd");
			if (!lectureTr) break;
			Element lectureDescrTr = it.next();
			Lecture lecture = parseLecture(tr, lectureDescrTr);
			lectures.add(lecture);
		}
		
		return lectures;
	}
	
	private static boolean getLecturesExist(Document frontPage) {
		//Elements result = frontPage.select("div#courseNaviContainer div:not(.separator) a:matches(Lectures|Luennot)");
		Elements result = frontPage.select("div#courseNaviContainer div:not(.separator) a:matches(Lectures|Luennot)");
		return !result.isEmpty();
	}
	
	private static Lecture parseLecture(Element lectureTr, Element lectureDescrTr) {
		Lecture lecture = new Lecture();
		lecture.date = lectureTr.child(0).text(); // "24 Jan 12"
		// child(1) = week, child(2) = day
		lecture.duration = lectureTr.child(3).text(); // "16:15-18:00"
		lecture.location = lectureTr.child(4).text(); // "T5"
		lecture.title = lectureTr.child(5).text(); // "General arrangements"
		lecture.description = lectureDescrTr.child(0).text();
		
		return lecture;
	}
	
	private static List<Exam> getExams(Document frontPage) {
		Elements examsTableRows = frontPage.select("h2:matches(Tentit*|Exams*) + table tr");

		List<Exam> exams = new ArrayList<Exam>();
		
		for (Element tr : examsTableRows) {
			Exam exam = parseExam(tr);
			exams.add(exam);
		}
		
		return exams;
	}
	
	private static Exam parseExam(Element tr) {
		Exam exam = new Exam();
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
		ExerciseSession exerciseSession = new ExerciseSession();
		// TODO parse for real, generate exercise sessions
		exerciseSession.title = tr.text();
		exerciseSession.description = "Exercise groups are WIP!";
		
		return exerciseSession;
	}
	
	private static List<Assignment> getAssignments(Document frontPage) {
		Elements assignmentsTableRows = frontPage.select("h2:matches(Harjoitustöiden DL:t|Assignment deadlines) + table tr");

		List<Assignment> assignments = new ArrayList<Assignment>();
		
		for (Element tr : assignmentsTableRows) {
			Assignment assignment = parseAssignment(tr);
			assignments.add(assignment);
		}
		
		return assignments;
	}
	
	private static Assignment parseAssignment(Element tr) {
		Assignment assignment = new Assignment();
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
