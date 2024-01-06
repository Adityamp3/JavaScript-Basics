/*This code shows the synchronous execution of asynchronous promises. Each task/promise gets execute in a sequential manner.
P1) Wake Up
P2) Drink Water
P3) Brush teeth
P4) Take a Bath
P5) Worship 

|¯¯¯¯¯¯¯¯¯¯¯|------->|¯¯¯¯¯¯¯¯¯¯¯|------->|¯¯¯¯¯¯¯¯¯¯¯|------->|¯¯¯¯¯¯¯¯¯¯¯|------->|¯¯¯¯¯¯¯¯¯¯¯|------->|¯¯¯¯¯¯¯¯¯¯¯|
|    P1     |------->| P1.then() |------->| P2.then() |------->| P3.then() |------->| P4.then() |------->| P5.then() |  
|           |------->|           |------->|           |------->|           |------->|           |------->|           |
|           |------->|    P2     |------->|    P3     |------->|    P4     |------->|    P5     |------->|           |
|___________|------->|___________|------->|___________|------->|___________|------->|___________|------->|___________|

*/

var p1 = new Promise((res, rej)=>{
    return res("Wake Up");
})
var p2 = p1.then(function(data){
    console.log(data);
    return new Promise((res, rej)=>{
        return res("Drink Water");
    })
})
var p3 = p2.then(function(data){
    console.log(data);
    return new Promise((res, rej)=>{
        return res("Brush Teeth");
    })
})
var p4 = p3.then(function(data){
    console.log(data);
    return new Promise((res, rej)=>{
        return res("Take a Bath");
    })
})
var p5 = p4.then(function(data){
    console.log(data);
    return new Promise((res, rej)=>{
        return res("Worship");
    })
})
p5.then(function(data){
    console.log(data);
})
