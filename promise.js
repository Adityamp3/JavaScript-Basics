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