/*
 * Created on 2.4.2012
 * @author verkel
 */
package mobilenoppa.model;


public class Assignment extends CourseItem {

	public String duration;
	
	@Override
	public String getType() {
		return "assignment";
	}

}
