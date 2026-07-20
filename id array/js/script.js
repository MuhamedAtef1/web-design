
let ids = [ 10 , 5, 2, 20]
let id = Number(prompt("Enter your id"))
index = ids.findIndex ((item) => item == id)
if(index == -1){
    ids.push(id)
    console.log(ids)
}
else{
    console.log(`your id is ${id} has index ${index}`)
}