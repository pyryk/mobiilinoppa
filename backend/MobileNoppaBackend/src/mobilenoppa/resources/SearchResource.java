/*
 * Created on May 4, 2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Course;
import mobilenoppa.scraper.NoppaScraper;

@Path("search/{query}")
public class SearchResource {
	@PathParam("query") public String query;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public List<Course> getMessage(){
   	return NoppaScraper.searchCourses(query);
   }
}
