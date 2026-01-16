//async and await
function delay(ms){
return new Promise((resolve)=>{
    setTimeout(resolve,ms)
})
}
async function start() {
    await delay(1000)
    console.log("hii");
    await delay(3000);
    console.log("hello");
    await delay(5000);
    console.log("hii there");
    
}
start()