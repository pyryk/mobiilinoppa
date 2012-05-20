/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Event;
import mobilenoppa.scraper.NoppaScraper;

/**
 * <ul>
 * <li>List of exercise group meetings (laskarit) on a course
 * <li>You can filter exercise group meetings to specific group with the groupID parameter
 * </ul>
 * @author verkel
 */
@Path("course/{courseID}/exerciseSessions")
public class ExerciseSessionsResource {
	@PathParam("courseID") public String courseID;
	@QueryParam("group") public String groupID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public List<Event> getMessage(){
   	return NoppaScraper.getExerciseSessions(courseID, groupID);
   }
}
