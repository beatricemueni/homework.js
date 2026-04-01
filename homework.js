//qn 1ole.log("The number is even")
 //}else{
   // console.log("The number is odd")
 //}

 //qn 3
 //let n =9
//let num1 = 2
//let num2 = 4

 //function sum(num1, num2){
   // return num1 + num2
 //}
 //let addition = sum(num1 ,num2)
 //console.log(addition)

 //qn 2
// let num = 5

 //if(num % 2 === 0){
   // cons
 //let sum = 0
 //for(let i= 1 ; i<= n; i++){
    //sum +=i
 //}
  // console.log(sum)

   //qn 4
   //let fruits =["grapes" , "apple" , "banana" , "pineapple" , "watermelon"]

   //for(let i = 0; i<fruits.length; i++){
    //console.log(fruits[i])
   //}

   //qn 5
   //const greetings = (name = "Guest") => {
    //return "Hello!" + name
   //}
   //console.log(greetings())
   //console.log("Mueni")

   //qn 6
   //class student{
    //constructor(name, grade){
        //this.name = name
        //this.grade = grade
    //}

    //checkResult(){
        //if(this.grade >= 50){
            //console.log(this.name + "passed")
        //}else{
            //console.log(this.name + "failed")
       // }
//}
   //}

//const student1 = new student("Alice" , 65)
//student1.checkResult()


//const student2 =new student("John" , 35)
//student2.checkResult()

//qn 7
//const myPromise = new Promise((resolve, reject) => {
  //setTimeout(() => {
    //resolve("Done");
 // }, 2000); // 2 seconds
//});

//myPromise.then(() => {
 // console.log("Task Complete!");
//});

//qn 8
function factorial(n) {
  try {
    if (typeof n !== "number" || n < 0) {
      throw new Error("Invalid input");
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;

  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log(factorial(5)) 
console.log(factorial(-2)) 
console.log(factorial("a"))