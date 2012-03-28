package mobilenoppa;
import java.io.IOException;
import java.util.*;

import mobilenoppa.model.Event;

import org.jsoup.Jsoup;
import org.jsoup.nodes.*;
import org.jsoup.select.Elements;

public class NoppaScraper {

	//public static String COURSE_ID = "t-111.5360";
	
	private Document getDocument(String url) throws IOException {
		return Jsoup.connect(url)
			.userAgent("Mozilla")
			//.data("param", "value")
			.get();
	}
	
	public boolean getLecturesExist(String courseID) throws IOException {
		String url = String.format("https://noppa.aalto.fi/noppa/kurssi/%s/etusivu", courseID);
		Document doc = getDocument(url);
		Elements result = doc.select("div#courseNaviContainer div:not(.separator) a:contains(Lectures)");
		return !result.isEmpty();
	}
	
	public List<Event> getLectures(String courseID) {
		String url = String.format("https://noppa.aalto.fi/noppa/kurssi/%s/luennot", courseID);
		Document doc;
		try {
			doc = getDocument(url);
		}
		catch (IOException e) {
			return Collections.emptyList();
		}
		
		List<Event> lectures = new ArrayList<Event>();
		
		Elements result = doc.select("table#leView > tbody > tr");
//		System.out.println(result);
		
		for (Iterator<Element> it = result.iterator(); it.hasNext();) {
			Element lectureElem = it.next();
			String lectureClass = lectureElem.className();
			boolean validLectureElem = lectureClass.equals("even") || lectureClass.equals("odd");
			if (!validLectureElem) break;
			Element lectureDescrElem = it.next();
			Event lecture = parseLecture(lectureElem, lectureDescrElem);
			lectures.add(lecture);
		}
		
		return lectures;
	}
	
	private Event parseLecture(Element lectureElem, Element lectureDescrElem) {
		Event lecture = new Event();
		lecture.date = lectureElem.child(0).text(); // "24 Jan 12"
		// child(1) = week, child(2) = day
		lecture.duration = lectureElem.child(3).text(); // "16:15-18:00"
		lecture.location = lectureElem.child(4).text(); // "T5"
		lecture.title = lectureElem.child(5).text(); // "General arrangements"
		lecture.description = lectureDescrElem.child(0).text();
		
		return lecture;
	}
}
