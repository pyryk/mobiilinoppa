/*
 * Created on May 5, 2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.scraper.NoppaScraper;

/**
 * List of codes of exercise groups on this course
 * 
 * @author verkel
 */
@Path("course/{courseID}/exerciseGroups")
public class ExerciseGroupsResource {
	@PathParam("courseID") public String courseID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public List<String> getMessage(){
   	return NoppaScraper.getExerciseGroups(courseID);
   }
}
