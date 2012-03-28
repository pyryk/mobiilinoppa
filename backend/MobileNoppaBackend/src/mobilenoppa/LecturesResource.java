/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Event;


@Path("/lectures")
public class LecturesResource {
	static NoppaScraper scraper = new NoppaScraper();
	
   @GET
   @Produces("application/json")
   public List<Event> getMessage(){
   	return scraper.getLectures();
   }
}
