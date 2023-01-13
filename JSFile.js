// alert("Hello World");

// console.log("Hello");

// console.error("Error here");

// console.warn("Warning here");

////// Variables //////

// var -- global scope variable
// let -- local scope, reassign value once declared: YES
// const -- local scope, reassign value once declared: NO

// let age= 31;
// age= 20;
// console.log(age);

// const age2= 75;
// age2= 20; //gives error as const value cant be changed
// console.log(age2);

////// Data Types⁡ //////

//String, number, boolean, null, undefined, symbol

// const str='World'; //string
// const num= 40;  //number
// const num2= 50.2; //number
// const iscorrect= true; //boolean
// const nullvar= null; // variable but nothing stored in it (null variable)
// const undefvar= undefined; // undefined variable
// let undefvar2; // is also undefined variable


// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof num2);
// console.log(typeof iscorrect);
// console.log(typeof nullvar);    
// console.log(typeof undefvar);
// console.log(typeof undefvar2);

//////String Concatenation//////

const str='World';
const num= 40; 
//Old method
console.log('The string is '+ str +' and num is '+ num);
//OR
//Template strings for concatenation
console.log(`The string is ${str} and num is ${num}`); // use backticks for template strings 

const concatStr=`The string is ${str} and num is ${num}`;
console.log(concatStr);

// .length property -- properties dont have parenthesis i.e. it is just .lengt
const newStr= "A new String";
console.log(newStr.length);

//.toUpperCase() method -- methods have parenthesis i.e. it is .toUpperCase()
const letters= "lowercase letters";
console.log(letters.toUpperCase());

//substring method -- String count always start at zero
const count="It is count string";
console.log(count.substring(0,4));
// here takes substring starting at position 0 and ending at position 3.

//split method -- splits string
const LargeStr= " this string needs to split";
console.log(LargeStr.split(""));
// splits each character in string including spaces
const ListOfThings= " Code, Eat, Sleep, Repeat"
console.log(ListOfThings.split(", "));
//splits whenever a comma and space found




////// Arrays /////

//unlike other languages arrays in JavaScript can store different data types in single array 
//JavaScript is not statically typed i.e. const name:string --- like this declaration isnt needed

const numbers= new Array(1,'tree', 4.5, true); // Array() is a constructor
console.log(numbers);

//OR

const fruits=['oranges', 'pears',1,true, 4.5];
console.log(fruits);
console.log(fruits[1]);

////adding elements at end
fruits[5]='tree';
console.log(fruits);

//OR
//push() method
fruits.push(647);
console.log(fruits);

// manipulating const arrays

fruits[5]='tree2'; // we're able to manipulate/change the value in array at position fruits[5] ('tree' to 'tree2'). 
// This is beacause we cannot reassign complete array but can manipulate it when declared as const fruits[...];
console.log(fruits);

// unshift() method
// adds variable at beginning
fruits.unshift(220);
console.log(fruits);

//// delete last element
// pop() method
fruits.pop()
console.log(fruits);

//// other methods
console.log(Array.isArray(fruits));
console.log(Array.isArray('t'));

console.log(fruits.indexOf(220));

// many other methods possible




////// Object Literals //////

const person={
    firstname: 'NameHere',
    lastname: 'Surname',
    age: 74,
    // array within object
    hobbies: ['sports', 'movies'],

    // object within object
    address:{
        street: 754,
        city: 'Houston',
        mobile: 'NA'
    }
}

console.log(person);
console.log(person.firstname, person.hobbies);
console.log(person.address.city, person.hobbies[0]);

/// Destructuring

// pulling out variables from object and making them independent variables
// for eg. here firstname & lastname are copied from person (as =person given) and values are pasted to new variables of same name, i.e. it is same as const firstname='NameHere';
const  {firstname, lastname}=person;

console.log(firstname);
console.log(lastname);
console.log(typeof firstname);

const {hobbies, address:{city}}=person;

console.log(hobbies);
console.log(city);

// adding elements to object

person.email="abc@123.com";
console.log(person);

//// array of objects 

const people=
[
    {
        id: 1,
        text: "take out trash",
        isComplete: false
    },
    {
        id:2,
        text: "Meeting with Boss",
        isComplete: true
    },
    {
        id: 3,
        text: "Dentist Appointment",
        isComplete: false,
    }
];


console.log(people);
console.log(people[1]);
console.log(people[0].text);

//convert object literal to json file text
const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);



////// Loops //////


////// for loop //////

for(let i=0; i<5; i++)
{
    console.log(i);
}

for( let i=0; i<people.length;i++)
{
    console.log(people[i].text);
}


////// while loop //////

let i=7;
while(i<10)
{
    console.log(`While loop count: ${i}`);
    i++;
}


////// for..of loop //////

for(let iter of people)
{
    console.log(iter.isComplete);
}


////// forEach() //////

people.forEach(
    function(iter)
    {
        console.log(iter.text);
    }
);

////// map() //////

const peopleText= people.map(
    function(iter)
    {
        return iter.text; 
    }
);
//gives an array peopleText extracting text variable from all objects of given array people[].
console.log(peopleText);

////// filter() //////

const peopleisComplete= people.filter(
    function(iter)
    {
        return iter.isComplete==true;
    }
);
// gives an array of objects which satisfy the given condition
console.log(peopleisComplete);


//we can also map the given array directly
const peopleisComplete2= people.filter(
    function(iter)
    {
        return iter.isComplete==true;
    }
).map(
    function(iter)
    {
        return iter.text;
    }
)

console.log(peopleisComplete2);



////// Conditionals //////


////// if else //////

const x= '10';

if(x==10) // == checks value only
{
    console.log("x equals 10");
}

if(x===10) // === checks value as well as data type
{
    console.log("x has same data type as 10 ");
}
else
{
    console.log(" x doesn't have same data type as 10");
}

// we can also add " else if(condition){} " in here
if(x>4)
{
    console.log(x);
}

const y=8;
if(x>4 && y<9)
{
    console.log("y less than 9 & x more than 4");
}


////// ternary operator //////

const number=10;
const color= number>11 ? "red" : "blue";
console.log(color);

////// switch //////

switch(color)
{
    case "red": 
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color undefined");
        break;
}


////// functions //////

function add(num1, num2)
{
    console.log(num1+num2);
}

add(4,5);

function add2(num1=7, num2=4)
{
    return (num1+num2);
}
console.log(add2());
console.log(add2(8,5));


////// arrow functions //////

// function keyword not needed

//1st type
const add3= (num1, num2)=>{
    return num1 + num2;
}
console.log(add3(4,10));

// 2nd type
// return keyword not needed
const add4= (num1, num2)=> num1 + num2;

console.log(add4(25,84));

//example
people.forEach((iter) => console.log(iter.text));

//this keyword remaining


////// Object Oriented Programming //////

////// Classes //////

// declaration using function prototyping -- ECMAScript 5 

function Person( FirstName, LastName, Country, date)
{
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Country = Country;
    this.date =new Date(date);
    this.getBirthYear = ()=> this.date.getFullYear();
}

Person.prototype.getFullName= function() {
    return `${this.FirstName} ${this.LastName}`;
};

// Note: Here Date() is predefined Class in JS 
//getBirthYear is a local variable defined with arrow function
//getFullYear() is predefined function in JS 

const p1= new Person('NameHere','Surname','CountryHere','1-1-2000');
console.log(p1);

const p2= new Person('Name2','Surname2','Country2','1-1-1998');
console.log(p2.FirstName);
console.log(p2.date);
console.log(p2.getBirthYear());
console.log(p2.getFullName());

//declare class using class keyword -- ECMAScript 6

class Person2{
    constructor(FirstName, LastName, Country, date)
    {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Country = Country;
        this.date =new Date(date);
        this.getBirthYear = ()=> this.date.getFullYear();
    }

    getFullName() {
        return `${this.FirstName} ${this.LastName}`;
    };
}

const p3= new Person2('Name3','Surname3','Country3','1-10-1896')

console.log(p3.getBirthYear());

console.log(p3.getFullName());

//
// Symbol ES6 , this keyword, in Depth DOM remaining
//


////// DOM Manipulation //////

// console.log(window);
// window.alert(1);



////// Single Element //////

////// getElementById() //////

// gets first element with given Id 

// console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');
console.log(form);

////// querySelector() //////

//gets first element with given query

const head1= document.querySelector('h1');
console.log(head1);


////// Multiple Elements //////


////// getElementsByClassName() //////

//gets all elements with given class name -- as a Collection
console.log(document.getElementsByClassName('item'));


////// getElementsByTagName() //////

//gets all elements with given tag name ( html tag) -- as a Collection
console.log(document.getElementsByTagName('div'));


////// querySelectorAll() //////

// selects all elements with given query -- as a NodeList

// Using "." prefix for class selector
console.log(document.querySelectorAll('.item'));

// Using "#" prefix for ID selector
console.log(document.querySelectorAll('#name'));

// Using tag name for tag selector
console.log(document.querySelectorAll('header'));

//example
const item= document.querySelectorAll('.item');

item.forEach((iter) => console.log(iter) );

//example 2

const ul = document.querySelector('.itemsall');

// ul.remove(); //removes ul from page (the items list is in ul )

// ul.lastElementChild.remove(); //removes last element in ul tag

// ul.firstElementChild.textContent = 'hello'; //changes text of first element inside ul to 'hello'

// ul.children[1].innerText = 'textchanged';

////// innerHTML //////

ul.lastElementChild.innerHTML = '<h2> HELLO </h2>';

// //// Changing CSS //////

// const btn = document.querySelector('.btn');

// btn.style.background = 'red';



// ////// Events //////

const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e)=> 
//     {
//         //executes the following instructions after clicking

//         e.preventDefault(); // prevents from removing the output from the next line --console.log('click');
//         console.log('click');  
//         console.log(e);
//         console.log(e.target);
//         console.log(e.target.className);
//         document.querySelector('#my-form').style.background = '#ccc';

//         document.querySelector('body').classList.add('bg-dark'); // classList gives the CSS class name  (here 'bg-dark' class present in 1.css at line 67)
//         //and classList.add() adds the given CSS class 'bg-dark' to the 'body' class at line 7.
//     }
// );


btn.addEventListener('mouseover', (e)=> 
    {
        //executes the following instructions after mouseover

        document.querySelector('body').classList.add('bg-dark'); 
    }
);

btn.addEventListener('mouseout', (e)=> 
    {
        //executes the following instructions after mouseover

        document.querySelector('body').classList.remove('bg-dark'); 
    }
);

// // Different events in MDN Documentation remaining

// ul.remove(); // see line 501 and 503 -- const ul = document.querySelector('.itemsall');


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name'); 
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg'); // div with class='msg'

const userList = document.querySelector('#users') // ul with id='users'

myForm.addEventListener('submit', onSubmit); 

function onSubmit(e)
{
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value ==='')
    {
        //if input of name or email are empty following code executes

        //alert("Enter credentials");
        // msg.innerHTML='<p style="color:red">Enter Credentials</p>' 

        msg.classList.add('error'); // add CSS Class error to msg 
        msg.innerHTML='<p>Enter Credentials</p>';
        

        setTimeout(()=>msg.remove(), 3000 ); // inbuilt function , takes time on RHS and function to execute after timeout on left, i.e. setTimeout( function, time);
    }
    else
    {
        //alert("Success");
        msg.innerHTML='<p style="color:green" > Success </p>';

        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);

        //Clear Fields
        nameInput.value='';
        emailInput.value='';

    }

    console.log(nameInput.value);

}
 

////// Iterators and Generators //////

////// Iterators //////

// Iterators are custom made for iterating over loop
// In general it takes in start of loop, end of loop, and step to be taken
// It contains next() function and has value: & done:true/false pair for each iteration of the loop which the next function returns
// the iterator executes from start (inclusive) till end (exclusive), i.e. end isnt included in loop
//nextIndex, interationCount, result

function makeRangeIterator(start=0, end=Infinity, step=1)
{
    let nextIndex = start; //stores Index of each iterator
    let iterationCount = 0;
    
    const rangeInterator =
    { 
        next()
        {
            let result;
            if(nextIndex < end) 
            {
                result = { value:nextIndex ,done:false }; // current iteration result
                nextIndex+=step; 
                iterationCount++;
                return result; // current iteration result is returned
            }
            return result = { value: nextIndex , done:true };// if Index is at end, i.e. loop has finished.
        }
    };
    return rangeInterator; // an iterator const variable, rangeInterator is returned
}

const iteratr=makeRangeIterator(1,5,1); // gives out rangeInterator
// thus "iteratr" is now an iterator.

let result =iteratr.next(); // to get first iteration value 

while(!result.done) //while loop isnt finished , i.e. while done is false (done:false).
{
    console.log(result.value);
    result=iteratr.next();
}
console.log(`Iterated over sequence of size: ${result.value}` );


////// For generators refer both MDN and LogRocket //////

//function* keyword
// it is built-in iterator declared using function*

//yield keyword
// after every "yield" keyword, the iteration is stopped and value stated after yield keyword is returned

//.next() -- to iterate

//.return() -- to stop the loop at any iteration

// we can pass values in .next() & .return() as well, for eg. .next('valueHere'); & .return('valueHere');

