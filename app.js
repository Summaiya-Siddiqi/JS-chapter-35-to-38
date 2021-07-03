//***************************************** Chapter 35 to 38 **************************************************** */
//***************************************** Function *********************************************** */

//Q no 1
//Write a function that displays current date & time in you browser.
// function dateandtime(){
//     document.write(" Current Date and time: "+new Date);
// }
// dateandtime();



//Q no 2
//Write a function that takes first & last name and then it
//greets the user using his full name.

// function fullname(){
//     var firstname = prompt("Enter your first name");
//     var lastname = prompt("Enter your last name");
//     alert("Full name: "+ firstname + " "+lastname+"\n Welcome to our website!\n Have a good day");
// }
// fullname();




//Q no 3
// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// function add(){
//     var num1 = +prompt("Enter num1 value ");
//     var num2 = +prompt("Enter num2 value ");
//     var a = num1+num2;
//     return a;
//      }
//      alert("The sum of two numbers is:"+add());




//Q no 4
//Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function calculate(n1,oper,n2){
    
//     if(oper=='+'){
//         return("sum of two numbers is :"+(n1+n2))
//     }
//     else if(oper=='-'){
//         return("difference of two numbers is :"+(n1-n2))
//     }
//     else if(oper=='*'){
//         return("product of two numbers is :"+(n1*n2))
//     }
//     else if(oper=='/'){
//         return("division of two numbers is :"+(n1/n2))
//     }
//     else{
//         alert("invalid try again")
//     }
// }

// var a=+prompt("Enter 1st number:")
// var b=prompt("Enter operator(+,-,*,/):")
// var c=+prompt("Enter 2nd number:")
// document.write(calculate(a,b,c));






//Q no 5
// Write a function that squares its argument.

// function getSquare(num) {
//     var square = num * num;
//     return square;
//   }
//   var a =+prompt("enter num for square");
//   alert("squares of "+ a +" argument is: "+getSquare(a));
 



//Q no 6
// Write a function that computes factorial of a number.
// var n =+prompt("Enter your number for factorial");
// var ans = n;
// function fact(n){
//     if (n==0||n==1){
//         return 1;
//     }
//     else{
//         for(var i =n-1;i>=1;i--){
//             ans = ans*i;
//         }
//         return ans;
//     }
// }
// var c = fact(n);
// alert("factorial of number is: "+c);





//Q no 7
// Write a function that take start and end number as inputs
//& display counting in your browser.

// function num(start,end){   
//     for(var i=start;i<=end;i++){
//         document.write(i+"<br>");
//     }
// }
// var a=+prompt("enter starting number:");
// var b=+prompt("enter ending number:");
// num(a,b);



//Q no 8
// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// var b=+prompt("enter base of the right angle triangle:")
// var p=+prompt("enter perpendicular of the right angle triangle:")
//         function calculateHypotenuse(base,per){
//             x=base;
//             y=per;
//             function calculateSquare(ba,pe){
//                 hsqr=(ba*ba)+(pe*pe);
//                 return hsqr;
//             }
//             h=Math.sqrt(calculateSquare(x,y));
//             return h   ; 
//     }
// alert(Math.floor(calculateHypotenuse(b,p)));

//********************************************************

// var b=+prompt("enter base of the right angle triangle:")
// var p=+prompt("enter perpendicular of the right angle triangle:");
// function hype(base,per){
//     var m = Math.sqrt(base*base+per*per); 
//     return m;
// }
//  var calhype = hype(b,p);
//  alert((Math.floor(calhype)));



//Q no 9
// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:

// i. Arguments as value

// function areaOfRectangle(width, height) {
//     var A = width * height;
//     return A;
//   }
//   alert("Area of a Rectangle is: " + areaOfRectangle(20, 10));

// ii. Arguments as variables

//   function areaOfRectangle(width, height) {
//     var A = width * height;
//     return A;
//   }
// var width=+prompt("enter width of the rectangle:");
// var height=+prompt("enter height of the rectangle:");
// alert("Area of a Rectangle is: " + areaOfRectangle(width, height));




//Q no 10
// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function palindrom(){
//     var word = prompt("Enter the word");
//     var check ="";
//     for(var i = word.length-1;i>=0;i--){
//         check+=word[i];
//     }
//     if(word == check){
//         alert(word+" is palindrom word");
//     }
//     else{
//         alert(word+" is not palindrom word");
//     }
// }
// palindrom();



//Q no 11
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function abc(str) {
//     var sentence = str.toLowerCase().split(' ');
//     for(var i = 0; i<sentence.length; i++){
//         sentence[i]= sentence[i][0].toUpperCase()+sentence[i].slice(1)
//     }
//     document.write(sentence.join(" "));
//     return sentence;
    
// }

// abc("the quick brown fox");




//Q no 12
// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// var str =prompt("enter a sentence to find longest word");

// function longestWord(string) {
//   var str = string.split(" ");
//   var longest = 0;
//   var word = null;
//   str.forEach(function (str) {
//     if (longest < str.length) {
//       longest = str.length;
//       word = str;
//     }
//   });
//   return word;
// }
// alert(str+"\n the longest word is: "+longestWord(str));





//Q no 13
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// var count=0;
// function occ(str,let){
//     var a=str;
//     for(var i=0; i<a.length; i++){
//         if(str[i]===let){
//             count=count+1;
//         }
//     }
//     return count;
// }
// var input=prompt("enter your text here: ")
// var letter=prompt("enter the letter of which you want to find the number of occurances: ");
// alert("the letter "+letter+" occured "+occ(input,letter)+" times in your text!");

//****************************************************************************** */

// function letter(str,count) {
//     str= str.toLowerCase();
//   var count = (str.match(/o/g) || []).length;
//   document.write("'JSResourceS.com', 'o' <br> The number of occcureence of o is "+count)
// }

// letter("JSResourceS.com", "o");




//Q no 14
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// var radius=+prompt("enter radius of the circle:");
// var pi = 3.14;

// function calcCircumference(radius) {
//   var circumference = 2 * (pi * radius);

//   return "The circumference is " + circumference;
// }

// function calcArea(radius) {
//   var area = pi * radius ** radius;

//   return "The area is " + area;
// }

// alert("Circumference of circle " + calcCircumference(radius));
// alert("The Area of circle " + calcArea(radius));