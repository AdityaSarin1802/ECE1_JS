//let count;
//document.write("Starting loop"+"<br/>");
//for(count=0;count<10;count++){
//    document.write("Current Count"+count);
//    document.write("<br/>");
//}
//document.write("Loop stopped!");

const person={
    fname:"Ajay", lname:"Singh", age:25
};
for(let x in person){
    console.log("person details:"+x+":"+person[x])
}