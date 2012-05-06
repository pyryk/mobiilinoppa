/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import javax.ws.rs.*;

import mobilenoppa.model.AllResults;
import mobilenoppa.scraper.NoppaScraper;


@Path("course/{courseID}/all")
public class AllResource {
	@PathParam("courseID") public String courseID;
	@QueryParam("group") public String groupID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public AllResults getMessage(){
   	return NoppaScraper.getAll(courseID, groupID);
   }
}