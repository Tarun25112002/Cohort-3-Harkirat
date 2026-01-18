// let counter = 0 
// function counterUpdate(){
//     counter++;
//     console.log(counter);
    
// }
// setInterval(counterUpdate, 1000)
// ##################################################

// let counter = 0 
// function updatecounter(){
//     counter++
//     console.log(counter);
    
//     setTimeout(updatecounter,1000)
// }
// updatecounter()
//###################################################

import fs from 'fs'
const read = fs.readFileSync(new URL('./a.txt', import.meta.url), 'utf-8')
const newfile = read.replace(/\s+/g, ' ');
fs.writeFileSync('./a.txt', newfile, 'utf-8')
const newreadfile = fs.readFileSync(new URL('./a.txt', import.meta.url), 'utf-8')
console.log(newreadfile);
