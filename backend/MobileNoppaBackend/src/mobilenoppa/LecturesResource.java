/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Event;


@Path("/{courseID}/lectures")
public class LecturesResource {
	static NoppaScraper scraper = new NoppaScraper();
	
	@PathParam("courseID") public String courseID;
	
	public LecturesResource() {
	}
	
   @GET
   @Produces("application/json")
   public List<Event> getMessage(){
   	return scraper.getLectures(courseID);
   }
}
