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

//Qn 5
//let greeting = (name = `guest` ) => {
  //return `Hello $(name)`
//}
//console.log(greeting[name])

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