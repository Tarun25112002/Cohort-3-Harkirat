

// import fs from 'fs'
// const file = fs.readFileSync(new URL("./a.txt", import.meta.url), 'utf-8')
// console.log(fs)

// sum of number from 1 to n
// function sum(num){
//     let count =0
//     for(let i = 0; i <=num; i++ ){
//         count = count + i
//     }
//    return count
// }
// let ans = sum(5)
// console.log(ans)
//
//call backs
// function print(name){
//     console.log(`my name is ${name}`)
// }
// function name(name, print){
//    console.log("function started");
//   return print(name)
// }
// name("Tarun", print)
//async code example

function print(num){
    let sum = num*(num+1)/2
    console.log(sum);
    
}
function greet(name, num, print){
    console.log(`Hii there, ${name}`);
    console.log(`wait i am calculating sum`);
    setTimeout(()=>{
        print(num)
    },3000)
}
greet("Tarun", 5, print)
