package mobilenoppa;

import java.io.Closeable;
import java.util.*;

import mobilenoppa.resources.*;

import com.sun.jersey.api.core.DefaultResourceConfig;
import com.sun.jersey.api.json.JSONConfiguration;
import com.sun.jersey.simple.container.SimpleServerFactory;

/**
 * The main class of Mobile Noppa backend. Created on 28.3.2012
 * 
 * @author verkel
 */

public class MobileNoppaBackend {

	/**
	 * The main method. Run to start the backend.
	 * 
	 * @param args Unused
	 */
	@SuppressWarnings("unchecked")
	public static void main(String[] args) throws Exception {

		DefaultResourceConfig resourceConfig = new DefaultResourceConfig(getResources());
		resourceConfig.getContainerResponseFilters().add(new CORSResponseFilter());

		Map<String, Boolean> features = resourceConfig.getFeatures();
		features.put(JSONConfiguration.FEATURE_POJO_MAPPING, true);
		Closeable server = SimpleServerFactory.create("http://localhost:8080", resourceConfig);
		try {
			System.out.println("Mobile Noppa backend started");
			System.out.println("Press any key to stop the service...");
			System.in.read();
		}
		finally {
			server.close();
		}
	}

	/**
	 * Get the set of resources that comprise the backend. The resources are
	 * mounted on distinct URLs that are declared in the resource classes.
	 */
	public static Set<Class<?>> getResources() {

		final Set<Class<?>> classes = new HashSet<Class<?>>();

		// register root resources
		classes.add(AllResource.class);
		classes.add(AssignmentsResource.class);
		classes.add(ExamsResource.class);
		classes.add(ExerciseGroupsResource.class);
		classes.add(ExerciseSessionsResource.class);
		classes.add(LecturesResource.class);
		classes.add(NameResource.class);
		classes.add(SearchResource.class);

		// register Jackson ObjectMapper resolver
		classes.add(JSONMapperProvider.class);

		return classes;
	}
}
