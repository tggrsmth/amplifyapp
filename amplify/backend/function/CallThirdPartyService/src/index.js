

exports.handler = async (event, context, callback) => {
    // TODO implement
    const axios = require('axios');
    const {
      v1: uuidv1,
      v4: uuidv4,
    } = require('uuid');	    
    const res = {
        statusCode: 200,
	"headers": {
		"Content-Type": "*/*"
	}	
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
    //    body: JSON.stringify('Hello from Lambda!'),
    };
    if (event.body===null||event.body===''){
        callback(new Error('Missing body'));
    } else {
	res.identifire=uuid.v4();    
	axios.get("http://example.com/request?body={event.body}&callback=/callback/{res.identifier}")
	   .then(response => {
             console.log("Third Party Service call status response" + response.statusCode);
	   })
	   .catch(error => {
	     console.log(error);
	   });	   
	      
	callback(null, res);
    }	    
    	    
};
