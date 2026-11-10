import framework from "./05a-framework.js";
import {readFile, writeFile, unlink, statSync, rmdir} from "node:fs";
let app = framework()
app.get("sum", (req, res) => {
    let numbers = req.url.split("/")
    res.writeHead(200)
    res.write(((+numbers[2]) + (+numbers[3])).toString());
    res.end()
})
app.get("createfile", (req, res) => {
    let file = req.url.split("/")
    writeFile(file[2], file[3].toString(), (err) => {
        if (err) {
            res.writeHead(500)
            res.write("Error: " + err)
        } else {
            res.writeHead(200)
            res.write("success")
        }
        res.end();
    })})
app.get("readfile", (req, res) => {
    let file = req.url.split("/")
    readFile(file[2], (err, data) => {
        if (err) {
            res.writeHead(500)
            res.write("Error: " + err)
        } else {
            res.writeHead(200)
            res.write(data)
        }
        res.end();
    })})
app.get('deleteFile', function (request, response) {
        let items = request.url.split("/");
        unlink(items[2], function (error) {
            if (error) {
                console.log('error', error);
                response.writeHead(500);
                response.write("deleteFile error");
                response.end();
            }
            else {
                console.log("deleteFile done"); 
                response.writeHead(200);
                response.write("deleteFile done");
                response.end();
            }
        });
});
app.get('deleteFolder', function (request, response) {
    let items = request.url.split("/");
    rmdir(items[2], function (error) {
        if (error) {
            console.log('error', error);
            response.writeHead(500);
            response.write("delete folder error");
            response.end();
        }
        else {
            console.log("delete folder done");
            response.writeHead(200);
            response.write("delete folder done");
            response.end();
        }
    });
});
app.get("delete", (req, res) => {
    let file = req.url.split("/")
    try {
        if (statSync(file[2]).isDirectory()) {
            rmdir(file[2], (err) => {
                if (err) {
                    res.writeHead(500)
                    res.write("Error: " + err)
                } else {
                    res.writeHead(200)
                    res.write(`${file[2]} deleted`)
                }
                res.end();
            })} else if (statSync(file[2]).isFile()) {
            unlink(file[2], (err) => {
                if (err) {
                    res.writeHead(500)
                    res.write("Error: " + err)
                } else {
                    res.writeHead(200)
                    res.write(`${file[2]} deleted`)
                }
                res.end();
            })}
    } catch (err){
        res.writeHead(404)
        res.write("file not found")
        res.end();
    }})
app.get("createUser", (req, res) => {
    readFile("db.json",(err, data) => {
        if (err) {
            res.writeHead(500)
            res.write("Error: " + err)
            res.end()
        } else {
            let db = JSON.parse(data);
            db.users.push(req.data)
            writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) {
                    res.writeHead(500)
                    res.write("Error: " + err)
                } else {
                    res.writeHead(200)
                    res.write("user created successfully")
                }
                res.end()
            })
        }
    })
})
app.listen(80, () => {})