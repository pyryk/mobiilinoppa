package mobilenoppa.model;

/*
 * Created on 28.3.2012
 * @author verkel
 */

public abstract class CourseItem {
	public String title;
	public String date;
	public String description;
	// public ? type
	
	public abstract String getType();
}
