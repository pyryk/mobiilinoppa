/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Assignment;
import mobilenoppa.scraper.NoppaScraper;


@Path("course/{courseID}/assignments")
public class AssignmentsResource {
	@PathParam("courseID") public String courseID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public List<Assignment> getMessage(){
   	return NoppaScraper.getAssignments(courseID);
   }
}