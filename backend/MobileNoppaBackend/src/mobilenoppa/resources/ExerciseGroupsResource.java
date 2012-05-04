/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Event;
import mobilenoppa.scraper.NoppaScraper;


@Path("course/{courseID}/exerciseGroups")
public class ExerciseGroupsResource {
	@PathParam("courseID") public String courseID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public List<Event> getMessage(){
   	return NoppaScraper.getExerciseGroups(courseID);
   }
}
