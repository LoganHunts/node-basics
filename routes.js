const fs   = require('fs'); 
const reqHandler = ( request, response ) => {
	let method = request.method;
	let url    = request.url;
    
    //Add basic html requirements.
    response.setHeader( 'Content-Type', 'text/html' );
    response.write( '<html>' );
    switch (url) {
        case '/':
            response.write( '<head><title>HomePage</title></head>' );
            response.write( '<body><p>Welcome User</p>' );
            response.write( '<a href="/users">User list</p></a></body>' );
            break;
        case '/users':
            response.write( '<head><title>Users</title></head>' );
            response.write( '<body><p>Welcome to All Users</p>' );
            response.write( '<ul><li>User 1</li><li>User 2</li><li>User 2</li><li>User 2</li><li>User 2</li></ul>' );
            response.write( '<a href="/create-user">Create User </p></a></body>' );
            break;

        case '/create-user':
            response.write( '<head><title>Users</title></head>' );
            response.write( '<body>' );
            response.write( '<form method="POST" action="#">\
            <label for="fname">Full name:</label><br>\
            <input type="text" id="fname" name="fname" >\
            <input type="submit">\
            </form>' );
            response.write( '</body>' );
            if ( 'POST' == method ) {
                const body = [];
                request.on('data', (chunk) => {
                  body.push(chunk);
                });
                request.on('end', () => {
                  const parsedBody = Buffer.concat(body).toString();
                  const message = parsedBody.split('=')[1];
                  fs.writeFileSync('logs.txt', message);
                  console.log('New User', message);
                });
                return response.end();
            }

            break;
            
            default:
                break;
    }

    response.write( '</html>' );
    return response.end();
}

// Export this file to index. ( READ ONLY )
module.exports = { handler : reqHandler, someText : 'Hello Bro' }
// export default reqHandler;  // module.exports = reqHandler;