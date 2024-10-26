const http = require("http");

const server = http.createServer((req, res)=> {

    let book1 = [
        {title: "Book 1", author: "Author 1", publicationYear: 2000},
        {title: "Book 2", author: "Author 2", publicationYear: 2010},
        {title: "Book 3", author: "Author 3", publicationYear: 2020}
    ]

    let Car = [
        {make: "Toyota", model: "Camry", year: 2010},
        {make: "Honda", model: "Accord", year: 2020},
        {make: "Ford", model: "Mustang", year: 2000}
    ]

    if (req.method === "GET" && req.url === '/login') {
        res.end(JSON.stringify(book1));
        console.log('Login successful');
    }
    else if (req.method === "GET" && req.url === '/register'){
        res.end(JSON.stringify(Car));
        console.log('Registration successful');
    }
});

const port = 8000;

server.listen(port,()=>{
    console.log(`listening on port ${port}`);
});



