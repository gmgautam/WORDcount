const email= document.querySelector(".email")
const password= document.querySelector(".password")
const input=document.querySelector("input")
const button=document.querySelector("button")

let user=[]
button.addEventListener("click",(e)=>{
    e.preventDefault()
   const userEmail=email.value
   const userPassword=password.value
   user.push({email:userEmail,password:userPassword})
   setLocaldata("user",user)
   show()
   
})

window.addEventListener("load",e=>{
    let data=getLoacalData("user")
    user=data
    console.log(data)
})

function show(){
    console.log(user)
}

// function for set Localstorage data
function setLocaldata(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}

function getLoacalData(key){
    return JSON.parse(localStorage.getItem(key))
}