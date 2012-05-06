/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Event;
import mobilenoppa.scraper.NoppaScraper;


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
