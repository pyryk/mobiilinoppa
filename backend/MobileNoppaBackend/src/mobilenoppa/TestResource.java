package mobilenoppa;
import javax.ws.rs.*;


/*
 * Created on 28.3.2012
 * @author verkel
 */

@Path("/test")
public class TestResource {
   @GET
   @Produces("application/json")
   public TestPOJO getMessage(){
   	return new TestPOJO();
   }
}
