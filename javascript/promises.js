import fs from 'fs'
// //  Write code that
// // logs hi after 1 second
// // logs hello 3 seconds after step 1
// // logs hello there 5 seconds after step 2
// // function helloThere() {
// //   console.log("hello there!");
// // }
// // function hello() {
// //   console.log("hello!");
// //   return setTimeout(helloThere, 5000);
// // }
// // function hi() {
// //   console.log("hi!");
// //   return setTimeout(hello, 3000);
// // }
// // setTimeout(hi, 1000);
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
// function hi() {
//   console.log("hi!");
// }
// function hello() {
//   console.log("hello!");
// }
// function hiiThere() {
//   console.log("hii there!");
// }
// delay(1000).then(hi);
// delay(3000).then(hello);
// delay(5000).then(hiiThere);
function readFile(filename){
return new Promise(resolve=>{
  const read = fs.readFileSync(new URL(filename, "utf-8"))
   resolve(read)
})
}
function callback(contents){
  console.log(contents);
  
}
readFile("./a.txt").then(callback)