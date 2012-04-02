/*
 * Created on 31.3.2012
 * @author verkel
 */
package mobilenoppa;

import com.sun.jersey.spi.container.*;

/**
 * Adds Cross-Domain Resource Sharing headers to server replies
 * 
 * @author verkel
 */
public class CORSResponseFilter implements ContainerResponseFilter {

	@Override
	public ContainerResponse filter(ContainerRequest request, ContainerResponse response) {
		response.getHttpHeaders().add("Access-Control-Allow-Origin", "*");
		response.getHttpHeaders().add("Access-Control-Allow-Headers", "X-Requested-With");
		response.getHttpHeaders().add("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
		
		return response;
	}

}
