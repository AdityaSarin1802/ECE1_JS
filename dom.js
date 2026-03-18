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
const result=document.getElementById("jk").getAttribute("class");
document.getElementById("p1").innerHTML=result;