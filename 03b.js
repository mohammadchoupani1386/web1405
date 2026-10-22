import {createServer} from "http"
 
function ServerCall(request, response) {
    console.log("hello !");
    console.log("url", request.url)
 let num = request.url.split("/")
    let sum = Number(num[1]) + Number(num[2]);
    response.writeHead(200);
    response.write(String("sum is : "+sum))
    
   


     response.end()


    
    

}
let server = createServer(ServerCall)
server.listen(555);