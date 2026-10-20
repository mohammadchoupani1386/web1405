import {createServer} from "http"
 
function ServerCall(request, response) {
    console.log("hello !");
    console.log("url", request.url)

    response.writeHead(200)
    response.write("hello 2 !")
    response.end()
    
    

}
let server = createServer(ServerCall)
server.listen(555);