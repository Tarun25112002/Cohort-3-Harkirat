function readFile(filename){
return new Promise(resolve=>{
  const read = fs.readFileSync(filename, "utf-8")
   resolve(read)
})
}
function callback(contents){
  console.log(contents);
  
}
readFile("./a.txt").then(callback)