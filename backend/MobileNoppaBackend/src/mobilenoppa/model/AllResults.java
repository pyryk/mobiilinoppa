/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.model;

import java.util.List;

/**
 * The root response object for the all courses query
 * 
 * @author verkel
 */
public class AllResults {

	public String name;
	public List<String> exerciseGroups;
	public List<CourseItem> courseItems;
}
