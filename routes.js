import fs from 'fs';
const reqHandler = ( request, response ) => {
	let method = request.method;
	let url    = request.url;

    console.log( method );
    console.log( url );
}

// Export this file to index.
export default reqHandler;