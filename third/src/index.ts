
// 1.Write a generic function in TypeScript that takes an array of any type and returns the reversed
// version of that array.

const reversed = <T>(arr:T[]):T[] => {
      return arr.reverse()

}

const NAME = [ 'balaji' , 'akash' ]
const val = reversed(NAME)

console.log(val);


// 2. Implement a function that accepts either a string or a number and returns the length if it's a
// string, and the square if it's a number. Use union types to handle both scenarios.


const lengthVal = (Input: number | string) => {
    if (typeof Input === 'string'){
        return Input.length
    }
    else if(typeof Input === 'number'){
        return Input**2
    }
    else{
        return console.log('error');
    }
}

const num = lengthVal(34);
const str = lengthVal('akash')

console.log(num);
console.log(str);


// 3. Design a function that takes either an array of strings or an array of numbers and returns the
// concatenated string or the sum of numbers accordingly.

const array = (Input: number[] | string[]):string | number => {
    if (typeof Input[0] === 'string'){
        return Input.join('');
    }
    else if(typeof Input[0] === 'number'){
        return Input.reduce((sum, num) => (typeof sum === 'number' ? sum : 0) + (typeof num === 'number' ? num : 0), 0);
    }
    else{
        throw new Error("error");
         
    }
}

const numCal = array([1,2,3,4,6])
console.log(numCal);

const numCal2 = array(['akash', 'balaji', 'pimplay'])
console.log(numCal2);



// 4. Create an interface for a person with name and age properties. Then, define another
// interface for a worker with jobTitle and salary. Finally, create a new type that represents a
// person who is also a worker using intersection types.

interface Person{
    name:string;
    age:number;
}

interface  Workers{
    jobTItle:string;
    salery:number;
}

type employes = Person & Workers;


// 5.Write a function that takes two objects as parameters, one representing a person and the
// other representing a worker. Use intersection types to ensure the function works with both
// types.

const obj = (employes: Person | Workers) => {

    if ('jobTitle' in employes && 'salery' in employes) {
        console.log("jobTitle:", employes.jobTItle);
        console.log("salery:", employes.salery);
    }
    else if('name' in employes && 'age' in employes){
        console.log("name:", employes.name);
        console.log("age:", employes.age);
    }
    else{
        return console.log('error');
        
    }
    
    
}

const person:Person = {
    name:'vinay',
    age:24,
    
}

const worker:Workers = {
 
    jobTItle:'Designer',
    salery:20_000,
}

obj(person)
obj(worker)



// 6. Develop a type guard function that checks if a given variable is a string. Use this type guard
// to conditionally capitalize the string or perform a different action if the variable is not a string

const TypeGuard = <T>(userInput:T) => {

    if (typeof userInput === 'string') {
        return console.log(userInput.toUpperCase());
        
    }
    else{
        return console.log('Not an string');
        
    }
}

const Guard = TypeGuard('balaji')
const Guard1 = TypeGuard(38824)

// 7. Implement a function that handles both strings and numbers. Use a type guard to differentiate
// between the two types and perform specific operations based on the type.


const Exp = <T>(userInput:T): number | string | void => {

    if (typeof userInput === 'string') {
        return console.log(userInput.toUpperCase());
        
    }
    else if(typeof userInput === 'number'){

        if(userInput === 0 || userInput === 1){
            return 1;
        }
        else{
            const numVal:number = Exp(userInput - 1) as number;
            return userInput * numVal
        }

    }
    else{
        return console.log('Not an string nor a number');
        
    }
}

// const Pro = Exp('vinay')
// const Pro1 = Exp(5)

const Pro = Exp('vinay');
console.log(Pro);

const Pro1 = Exp(5);
console.log(Pro1);










