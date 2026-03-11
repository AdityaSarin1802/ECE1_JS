//let age = 17;
//if (age > 18) {
//  document.write("<b>You are eligible to cast the vote</b>");
//}
//else {
//  document.write("<b>You are a minor</b>");
//}

let grade='A';
document.write("Entering switch block");
switch(grade){
    case 'A': document.write("Good Job<br/>");
    break;
    case 'B': document.write("Pretty Good<br/>");
    break;
    case 'C': document.write("Passed<br/>");
    break;
    case 'D': document.write("Not so good<br/>");
    break;
    default: document.write("You failed<br/>");
    break;
}