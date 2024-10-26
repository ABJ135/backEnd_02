const http = require("http");

const server = http.createServer((req, res)=> {
    console.log(req.method,"server started");
});

const port = 8000;

ServiceWorker.listen(port,()=>{
    console.log("listening on port")
});