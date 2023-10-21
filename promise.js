new Promise((resolve,reject)=>{
    const num = Math.random();
    if(num>.5){
        console.log("number is greater than .5")
        resolve(2)
    }else{
        reject("number is less than 0.5")
    }
    }).then(data=>console.log(data)).catch(err=>console.log(err))