
let strLength=7
let result=""
function randomGenerator(){
    const character="1234567890"
    for(let i=0;i<strLength; i++){
        let random=Math.floor(Math.random()*character.length)
        result+=character.substring(random,random+1)
    }
    document.querySelector("h4").innerHTML=result
    result=""
}