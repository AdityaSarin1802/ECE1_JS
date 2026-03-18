// by id
// const result=document.getElementById("jk");
// console.log(result);
// result.innerHTML="my self";
//  result.title="my name";

//by class name
//  const result2=document.getElementsByClassName("p1");
// //  console.log(result2);
// result2[1].innerHTML="Sarin";
// result2[0].innerHTML="Aditya";

//by tag name
// //for css
// const result3=document.getElementsByTagName("p");
// result3[1].style.color="blue";

// query selector
// const result4=document.querySelector("myId/myClass/tag");

// const result5=document.querySelectorAll("myId/myClass/tag");
// const result5=document.querySelectorAll("ul li");
// for(x in test2){
// }

//attributes
// // get attribute
// const result=document.getElementById("jk").getAttribute("class");
// document.getElementById("p1").innerHTML=result;

// // set attribute
// element.setAttribute("class","democlass");

//style
// #Disclaimer: Camel Case properties
// element.style.propertyname=x;

//html append method
// // create element
// const heading=document.createElement("h2");
// // get the parent
// const bodytag=document.getElementsByTagName("body");
// bodytag[0].append(heading);
// prepend(), before(), after()
// // remove element
// node.remove();
// // close method
// document.open();
// document.write();
// document.close();

function onClick(){
    console.log("Clicked");
}
function onMouseOver(){
    console.log("on mouse over");
}
function onMouseOut(){
    console.log("on mouse out");
}
function onMouseDown(){
    console.log("on mouse down");
}
function onMouseUp(){
    console.log("on mouse up");
}
function onMouseMove(){
    console.log("on mouse move");
}
function onDblClick(){
    console.log("double clicked");
}