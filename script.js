// Qno1
//part a
// let a=10;
// let b=++a
// document.write( "   <h2>Result:</h2> The value of a is =10" +"<hr>"+"  The value of ++a is " ,b+"<br>"+"Now  the value of a is ",b);

//part b
// let a=11;
// let b=a++
// document.write( "<br>"+"  The value of a++ is " ,b+"<br>"+"Now  the value of a is ",a);

//partc
// let a=12;
// let b=--a
// document.write( "<br>"+"  The value of ++a is " ,b+"<br>"+"Now  the value of a is ",b);

//part d
// let a=11;
// let b=a--
// document.write( "<br>"+"  The value of a++ is " ,b+"<br>"+"Now  the value of a is ",a);

//Qno2
//
// let a=2;
// let b=1
// let result=--a - --b + ++b + b--;
// console.log(a)
// console.log(b)
// console.log("result",result)

//QNO3
// let username=prompt("Enter your name")
// if (username) {
//     alert("Hello"+ username +"Welcome to our program")
// }
// else{
//     alert("Welcome to our program")
// }

//Qno5
// let inputNum=prompt("Enter a multiplication input number")

// inputNum = parseInt(inputNum);


// if (isNaN(inputNum) || inputNum === 0) {
//     inputNum = 5;
// }

// document.write("<h2>Multiplication Table of " + inputNum + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(inputNum + " x " + i + " = " + (inputNum * i) + "<br>");
// }

// Qno6
// var subject1 = prompt("Enter name of subject 1:");
// var subject2 = prompt("Enter name of subject 2:");
// var subject3 = prompt("Enter name of subject 3:");


// var totalMarks = 100;

// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));


// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;


// document.write("<h2>Result:</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td><b>Total</b></td><td><b>" + (3 * totalMarks) + "</b></td><td><b>" + totalObtainedMarks + "</b></td></tr>");
// document.write("</table>");
// document.write("<p><b>Percentage:</b> " + percentage.toFixed(2) + "%</p>");
