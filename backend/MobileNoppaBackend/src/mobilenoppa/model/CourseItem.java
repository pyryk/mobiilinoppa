package mobilenoppa.model;

/**
 * A reminder of something of interest for a course. Contains a title,
 * description, and a date that is either tells when this thing starts (for
 * Event), or is a deadline (for Assignment). Created on 28.3.2012
 * 
 * @author verkel
 */
public abstract class CourseItem {

	public String title;
	public String date;
	public String description;

	public abstract String getType();
}
