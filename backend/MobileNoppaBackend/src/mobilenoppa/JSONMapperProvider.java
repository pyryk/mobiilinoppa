package mobilenoppa;
import javax.ws.rs.ext.*;

import org.codehaus.jackson.map.*;
import org.codehaus.jackson.map.SerializationConfig.Feature;

/*
 * Created on 28.3.2012
 * @author verkel
 */

@Provider
public class JSONMapperProvider implements ContextResolver<ObjectMapper> {

	private ObjectMapper mapper;
	
	public JSONMapperProvider() {
		mapper = new ObjectMapper();
		// Pretty print outputted JSON
		//mapper.configure(Feature.WRAP_ROOT_VALUE, true);
		mapper.configure(Feature.INDENT_OUTPUT, true);
	}

	@Override
	public ObjectMapper getContext(Class<?> type) {
		return mapper;
	}

}
