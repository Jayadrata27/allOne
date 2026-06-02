const http=require("http");

const server=http.createServer((req,res)=>{
   
    if(req.url==="/"){
        res.end("Hello Coder Army");
    }
    else if(req.url==="/contact"){
        res.end("This is our Contact page");
    }
    else if(req.url==="/about"){
        res.end("This is our About page");
    }
    else{
        res.end("Error: page not found");
    }
});

server.listen(4000,()=>{
    console.log("I am listening at port number 4000")
});