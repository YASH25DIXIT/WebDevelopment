let interestrate= 0.3;
//var
//const
interestrate= 1;
console.log(interestrate);


// primitive type
let name='yash'; //string literal
let age=30; //number literal
let isapproved = false; //boolean literal
let lastname =null; //null
let fname= undefined; //undefined


// Objects
let person={
    name:'yash',
    age:'20'
};
console.log(person);
//dot notation
person.name='pappu';
console.log(person.name);
//bracket notation
person['name']= 'marry';
console.log(person.name);

//Arrays
let selectedcolors=['red','blue'];
console.log(selectedcolors);
console.log(selectedcolors[0]);
selectedcolors[2]='green';// adding new color in array
console.log(selectedcolors);
console.log(selectedcolors.length);

//functions
function greet(){
    console.log('hello world')

}
greet();

function greet1(name){//paramter
    console.log('hello ' + name);

}

greet1('YASH')//argument

function greet2(fname,lname){
    console.log('Hello' + fname + " " + lname);
}

greet2('Yash','Dixit')

//calculating a value

function square(number){
    return number*number ;

};
let number=square(2);
console.log(number);