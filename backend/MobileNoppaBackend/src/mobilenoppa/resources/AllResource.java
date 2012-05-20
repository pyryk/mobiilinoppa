/*
 * Created on 28.3.2012
 * @author verkel
 */
package mobilenoppa.resources;

import javax.ws.rs.*;

import mobilenoppa.model.AllResults;
import mobilenoppa.scraper.NoppaScraper;

/**
 * <ul>
 * <li>Shows the course name, names of exercise groups and all events on the
 * course
 * <li>This reply contains all information backend provides, besides the course
 * search
 * <li>You can filter exercise group meetings to specific group with the groupID
 * parameter
 * </ul>
 * 
 * @author verkel
 */
@Path("course/{courseID}/all")
public class AllResource {

	@PathParam("courseID")
	public String courseID;
	@QueryParam("group")
	public String groupID;

	@GET
	@Produces(Resources.CONTENT_TYPE)
	public AllResults getMessage() {
		return NoppaScraper.getAll(courseID, groupID);
	}
}