/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import java.util.List;

import javax.ws.rs.*;

import mobilenoppa.model.Exam;
import mobilenoppa.scraper.NoppaScraper;


@Path("/{courseID}/exams")
public class ExamsResource {
	@PathParam("courseID") public String courseID;
	
   @GET
   @Produces(Resources.CONTENT_TYPE)
   public List<Exam> getMessage(){
   	return NoppaScraper.getExams(courseID);
   }
}
