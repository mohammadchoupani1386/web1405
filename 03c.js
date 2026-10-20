import {writeFile} from "fs";
import {createServer} from "http"
 
let controllers = [
    {
        name : "sum",
        func: function (request, response){
             let num = request.url.split("/");
             let sum = Number(num[2]) + Number(num[3]);
             response.writeHead(200);
             response.write(String("sum is : "+sum))
             response.end()


        }
       

    },
     {
            name: "createFille",
            func: function(request, response){
                             let num = request.url.split("/");
                             writeFile("num[2]", "num[3]", function(){
                                response.writeHead(200);
                                response.write("createFille done");
                                response.end();
                             })
                             

            }

     }
]

function ServerCall(request, response) {
    console.log("hello !");
    console.log("url", request.url)

    let found = false;
    for(let i=0; i<controllers.length; i++){
        if(request.url.startsWith("/" + controllers[i].name)){
            found=true;
            controllers[i].func(request, response)
            break;
        }
    }
    if(!found){
        console.log("not found")
    }
    
    
   




    
    

}
let server = createServer(ServerCall)
server.listen(555);