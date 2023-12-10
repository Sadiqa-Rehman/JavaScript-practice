
///////////  SHOW POPUP /////////

 //alert  form popup

alert("hello everyone");
alert("we welcome you with happly welcome on web page ")

//confirm show conform popup
confirm("may i use your cookies")
confirm("can i help")




/*-----------------------------------------

////// FOR NUMBER //////

parseInt("25 years")
parseFloat("10.33")

------------------------------------------*/

/////// addition ///////
//eval("2+2")

//NaN mens not a number
// isNaN("hello")



/////////  PROMPT /////

var value= ""
var numone = prompt("enter first value to perform the  multiplication operation", value);
var numtwo = prompt("enter second value to perform the  multiplication operation", value);
var result = eval("numone * numtwo");
document.write("The result of multiplying: " + numone + " and " + numtwo + " is: " + result + ".");


// var name = "Mark";
// name1 = "sadiqa"
// name2 = "safia"
// name3 = "shakeel"

// alert (name1 )

// var thanks = "thaNK U FOR COMMING"
// var greeting = "plz come again"
// alert(thanks )

// alert(3+3)

// var user1 = {
//     'name': "sadiqa",
//     myAge: 17,
//     hobbies: ["gardening", "coding", "riding"],
//   };
//   console.log( user1.myAge );

// var user2 = {
//   'name': "hira",
//   myAge: 10,
//   hobbies: ["gardening", "coding", "riding"],
// };
// console.log( user2 );


// var user3 = {
//     'name': "rima",
//     myAge: 10,
//     hobbies: ["gardening", "coding", "riding"],
//   };
//   console.log( user2.hobbies[2] );

// var propName = 'username';
// var propVal = 'RuhamaGull';

// var user = {
//     [propName + 's']: propVal,
//     'my age': 10,
// }

// console.log(user['my age']);


var user1 = {
    name: "ruhama",
    myAge: 10,
    hobbies: ["gardening", "coding", "riding"],
    address: {
        street: "Line 1",
        zipCode: 1234,
        city: "karachi",
    },
};

var user2 = {
    'name': "hira",
    myAge: 10,
    hobbies: ["gardening", "coding", "riding"],
};

// user2.class = 1;//add prop

// var users = [user1, user2];
// console.log(user2);

// user2.myAge = 20; // override
// console.log(user2);



// var btn = document.getElementById('btn');
// var div = document.getElementById('container');

// var isVisible = false;

function visible(){
  if(!isVisible){
    div.style.display = 'block'
    isVisible = true
    }else{

    div.style.display = 'none'
    isVisible = false;

    }

}
// IN DELETE

delete user2.myAge;
console.log(user2);

console.log( 'hobbies' in user2);

// var btn = document.getElementById('btn');
// var div = document.getElementById('container');

var isVisible = false;
function visible(){
    if(!isVisible){
      div.style.display = 'block'
      isVisible = true
      }else{
  
      div.style.display = 'none'
      isVisible = false;
  
      }
  
  }

