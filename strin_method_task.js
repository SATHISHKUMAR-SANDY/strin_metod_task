//TASK 1 

let string_1 = " sathish ";
console.log(string_1.toUpperCase());
console.log(string_1.toLowerCase());
console.log(string_1.trim());
console.log(string_1.includes("sathish"));


//TASK 2

let string_2 = "SANDY SATHISH"
console.log(string_2.substring(0,4));
console.log(string_2.slice(0,4));

//TASAK 3



let string_3 ="1,2,3,4,5";
let string_4 = "one,two,three,four,five";
console.log(typeof(string_3.split(" ")));
console.log( typeof(string_3));
console.log(typeof(string_4.split(" ")));
console.log( typeof(string_4));
console.log(string_3.concat(string_4))


//TASK 4
(()=>{
let string_5 = "hiii byee hlo";
let replace_result = string_5.replace("hiii","oiii").concat(" ").repeat(2);
console.log(replace_result);
})();



//TASK 5

let name = "sathish";
let rool = "developer";
let tech = "python_fullstack";
console.log(`${namee} ${rool} ${tech}`);