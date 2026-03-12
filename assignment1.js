function calculateResult(){
    let n=document.getElementById("subjects").value;

    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject no. "+(i+1)));//prompt returns string values
        total+=x;
    }
    let avg=total/n;
    let grade;
    if(avg<40){
        grade='F';
    }
    else{
    if(avg>=90){
        grade='A+';
    }
    if(avg>=80 && avg<90){
        grade='A';
    }
    if(avg>70 && avg<80){
        grade='B';
    }
    if(avg>60 && avg<70){
        grade='C';
    }
    if(avg>50 && avg<60){
        grade='D';
    }
}
let result;
if(avg>40){
    result="PASS";
}
else{
    result="FAIL";
}
    let r=document.getElementById("result").innerHTML="Total Marks: "+total+"<br/>"+
    "Average Marks: "+avg.toFixed(2)+"<br/>"+"Grade: "+grade+"<br/>"+"Result: "+result+"<br/>";
}