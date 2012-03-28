/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Event;
import mobilenoppa.scraper.NoppaScraper;


@Path("/{courseID}/assignments")
public class AssignmentsResource {
	@PathParam("courseID") public String courseID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public List<Event> getMessage(){
   	return NoppaScraper.getAssignments(courseID);
   }
}