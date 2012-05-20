/*
 * Created on 2.4.2012
 * @author verkel
 */
package mobilenoppa.model;

/**
 * A lecture for a course
 * 
 * @author verkel
 */
public class Lecture extends Event {

	@Override
	public String getType() {
		return "lecture";
	}

}
