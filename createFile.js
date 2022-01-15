//Create file
//content of file should be current timestamp
//filrname should be current date-time.txt

//inbuilt package
const fs = require("fs");
//3rd party package
const express = require("express");
const path = require("path");

const app= express();
const PORT=9000;


//everytime the file wil name current date-time.txt and content timestamp is created
app.get("/createFile",(request,response)=>{
    const currentdate = new Date(); 
        const datetime = (currentdate.getDate() + "-"
        + (currentdate.getMonth()+1)  + "-" 
        + currentdate.getFullYear() + "-"  
        + currentdate.getHours() + "-"  
        + currentdate.getMinutes() + "-" 
        + currentdate.getSeconds());
                            
const timestamp = Date.now();

    fs.writeFile(`./backup/${datetime}.txt`,timestamp.toString(),(err)=>{
        //once operation done like a confirmation message
        console.log("completed writing",`./${datetime}.txt`,timestamp.toString())
        //file will be downloaded in browser once it is created
        response.download(path.resolve(`./backup/${datetime}.txt`))
    })

});


app.get("/listFiles",(request,response)=>{
    fs.readdir("./backup",(err,data)=>{
        console.log(data,data.length);
        response.send(data)
    })
});





app.listen(PORT,()=>console.log("Server started in port "+PORT))