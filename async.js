//asynchronous programming
// let promise=new Promise((resolve,reject)=>(
// let success=true;
// if(success){resolve("Data Loaded");}
// else{reject("Error Occurred");}
// ));
// promise.then(result=>console.log(result)).catch(error=>console.log(error));

async function getData(){
    let response=await fetch("");
    let data=await response.json();
    console.log(data);
}
getData();