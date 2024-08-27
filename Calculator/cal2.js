const Displayinput = document.querySelector(".display");
const button=document.querySelectorAll(".button")

let string=""

Array.from(button).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        let num=e.target.innerHTML
        console.log(typeof string)
        if(num=="="){
            string=eval(string)
            Displayinput.value=string
        }else{
            string=string+num
            console.log(string)
            Displayinput.value=string
        }
        checkError(string)
    })
    
})

function Clear(){
    string=""
    Displayinput.value=string
}

function checkError(e){
    let und=typeof e
    if(und=="undefined"){
        Clear()
    }
}