const express = require("express");
const app = express();

//this will handle only GET
app.get("/user", (req, res) =>{
    res.send({firstName: "Sivatmika", lastName: "Vallabhaneni"});
});
app.use("/test", (req, res) => {
    res.send("this is the testing path of server");
});
app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777......");
});