/*
 * Created on 2.4.2012
 * @author verkel
 */
package mobilenoppa.resources;

import javax.ws.rs.*;

import mobilenoppa.scraper.NoppaScraper;

/**
 * The course name
 * 
 * @author verkel
 */
@Path("course/{courseID}/name")
public class NameResource {
	@PathParam("courseID") public String courseID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public String getMessage(){
   	return NoppaScraper.getCourseName(courseID);
   }
}