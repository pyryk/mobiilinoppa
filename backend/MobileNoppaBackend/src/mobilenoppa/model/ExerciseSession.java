/*
 * Created on 2.4.2012
 * @author verkel
 */
package mobilenoppa.model;

/**
 * Exercise session (or exercise group meeting or "laskarit") for a course.
 * 
 * @author verkel
 */
public class ExerciseSession extends Event {

	@Override
	public String getType() {
		return "exerciseSession";
	}

}
