/* Dekho jab bhi koi code asynchronous hota hai toh hame wait karna hota hai kyoki hame nhi pta ki uska answer kab aayega
METHOD 1) : BASIC APPROACH
▶ function abcd ke andar fetch command ki help se ek random user ka data 'fetch' kia.
▶ Ab yaha pe humne 2 baar .then() use kiya hai kyoki jo data humne fetch kiya hai vo raw form me hai. 
▶ So, 1st 'then()' se vo json(readable form) me transform hota hai and 2nd 'then()' se execution ke liye call hota hai.
*/
function abcd(){
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    });
}
abcd();

/*METHOD 1) : OPTIMISED APPROACH
▶ Since yeh ek asynchronous function hai toh humne 'async' keyword se isse denote kiya.
▶ Ab yaha 'raw' and 'ans' asynchronous hai yani vo 'sidestack' me jayenge. Hum chahate hai ki(compiler yaha pe thoda wait kare) pahale yeh execute ho, fir aage jaaye, isiliye 'await' use kiya.
▶ Similarly 'ans' pe bhi 'await' kiya otherwise output 'pending' state me chala jata.  
*/
async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json();
    console.log(ans);
}
abcd();
