//qn 1
let num1 = 2
let num2 = 4

 function sum (num1 , num2){
  return num1 , num2
 }
 let addition = sum (num1 , num2)
 console.log(addition)

 //qn 2
 let num = 5

 if(num % 2 === 0){
  console.log("The number is even")
 }else{
  console.log("The number is odd")
 }

 //qn 3
 let n = 9
 let sum = 0
 for(let i = 1; i<=n; i++){
  sum +=i
 }
 console.log(sum)

 //gn 4
 let fruits = ["grapes" , "apple" , "banana" , "watermelon" ,"pineapple"]

 for(let i=0; i<fruits.length; i++){

 }
//Qn 5
let greeting = (name = `guest` ) => {
  return `Hello $(name)`
}
console.log(greeting[name])

//qn 6
   class student{
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }

    checkResult(){
        if(this.grade >= 50){
            console.log(this.name +  " has passed")
        }else{
            console.log(this.name + " has failed")
        }
}
   }

const student1 = new student("Yasmine" , 74)
student1.checkResult()


const student2 =new student("Beatrice" , 89)
student2.checkResult()

//qn 7
const myPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Done");
    }, 2000);
});
 myPromise.then(()=> {
    console.log("Task complete")
 })

//qn 8
function factorial(n) {
    try {
        if (typeof n !== "number" || n < 0){
            throw new Error("Invalid input")
        }
        let result = 1

        for (let i = 1; i <=n; i++){
            result *=i
        }

        return result;
    } catch (error){
        console.log("Error",error.message)
    }
}

console.log(factorial(5))
console.log(factorial(-2))
console.log(factorial("a"))
