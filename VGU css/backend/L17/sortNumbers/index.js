const fs = require('fs');
const path = require('path');

function fetchData(filName){
    const loc = path.join(__dirname,"data",filName)
    return new Promise((resolve, reject) => {
        fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

fetchData("input1.txt")
    .then((data1)=>{
        // console.log(data1);
        fetchData("input2.txt")
            .then((data2)=>{
                // console.log(data2);
                let arr1= data1.split(" ");
                let arr2 = data2.split(" ")
                let arr = [...arr1,...arr2];
                arr.sort((a,b)=>{
                    return a-b;
                })
                let outputData = arr.join(" ");
                // console.log(arr);
                // console.log(outputData);
                const loc = path.join(__dirname,"data","output.txt");
                fs.writeFile(loc,outputData,(err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("DONE")
                    }
                })
            })
    })
    .catch((err)=>{
        console.log(err);
    })

    // let a = [3,5,7,9];
    // let b = [13,45,67];

    // let x = [...a,...b]
    //         [3,5,7,9,13,45,67]