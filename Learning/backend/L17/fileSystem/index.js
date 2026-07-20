const fs = require("fs");
const path = require("path");

// const loc = path.join(__dirname,"file","abc.txt");

// fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(data.toString());
//         console.log(data);
//     }
// })

const loc = path.join(__dirname,"file","index.txt");
const data = "Hello through fs.write file"

fs.writeFile(loc,data,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data written succesfully!")
    }
})