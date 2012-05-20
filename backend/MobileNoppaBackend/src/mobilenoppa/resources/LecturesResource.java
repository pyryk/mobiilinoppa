/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Lecture;
import mobilenoppa.scraper.NoppaScraper;

/**
 * List of lectures on a course
 * 
 * @author verkel
 */
@Path("course/{courseID}/lectures")
public class LecturesResource {
	@PathParam("courseID") public String courseID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public List<Lecture> getMessage(){
   	return NoppaScraper.getLectures(courseID);
   }
}
