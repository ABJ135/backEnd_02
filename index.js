const http = require("http");

const server = http.createServer((req, res)=> {
    if (req.method === "GET" && req.url === '/login') {

        console.log('Login successful');
    }
    else if (req.method === "GET" && req.url === '/register'){
        console.log('Registration successful');
    }
});

const port = 8000;

server.listen(port,()=>{
    console.log(`listening on port ${port}`);
});