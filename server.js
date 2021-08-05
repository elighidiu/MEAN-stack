import Express from "express";

const app = Express();
const port = 3000;

//GET, PUT, POST, DELETE

// get has 3 diffrent functions: the path, the middleweare (this can be empty), callback 
app.get("/", (request,response)=>{
    response.send("Hello World");
});

app.post("/", (request,response)=>{
    response.status(200).send({"message": "Data received"});
});
app.listen(port, ()=> console.log("Listening on port" + port));
