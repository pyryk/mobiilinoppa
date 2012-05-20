/*
 * Created on 2.4.2012
 * @author verkel
 */
package mobilenoppa.model;

/**
 * An assignment for a course
 * 
 * @author verkel
 */
public class Assignment extends CourseItem {

	public String duration;

	@Override
	public String getType() {
		return "assignment";
	}

}
