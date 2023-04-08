const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let text2 = document.getElementById("copybtn2")
let text1 = document.getElementById("copybtn1")

function generatePassword(){
    let pwd1 = " "
    let pwd2 = " "

    let out1 = document.getElementById("copybtn1")
    let out2 = document.getElementById("copybtn2")

    for(let i = 0; i < 15; i++){
        pwd1 += characters[Math.floor(Math.random() * characters.length)]
        pwd2  += characters[Math.floor(Math.random() * characters.length)]
    }
   out1.textContent = pwd1
   out2.textContent = pwd2
   console.log(document.getElementById("btn-flow").style.justifyContent)

}

    let right = true;
    let left = false;

  function modeBtn(){
    if (right === true){
    document.getElementById("mode-btn").innerHTML = "<i class='fas fa-sharp fa-solid fa-moon'></i>"
    document.getElementById("btn-flow").style.justifyContent = "start";
    document.getElementById("container").style.backgroundColor = "#1F2937"
    document.getElementById("header").style.color = "#FFFFFF"
    document.getElementById("random-text").style.color = "#4ADF86"
    document.getElementById("sub-text").style.color = "#D5D4D8"
    document.getElementById("password-input").style.color = "#2F3E53"

    right = false
    left =true
    console.log("left")
    }

    else{
        document.getElementById("btn-flow").style.justifyContent = "end";
       document.getElementById("mode-btn").innerHTML = "<i class='fas fa-thin fa-sun'></i>"
       document.getElementById("container").style.backgroundColor = "#ECFDF5"
       document.getElementById("header").style.color = "#2B283A"
       document.getElementById("random-text").style.color = "#10B981"
       document.getElementById("sub-text").style.color = "#6B7280"
       document.getElementById("password-input").style.color = "#D5D4D8"

       
        right = true
        left = false
        console.log("right")
    }


}

let copied = false
function copy(){
    document.querySelector("")
}
let text = ""
function copyFirstPassword(){
   text = document.getElementById("copybtn1").textContent
   navigator.clipboard.writeText(text)
   console.log(navigator.clipboard.readText)
}
function copySecondPassword(){
    text = document.getElementById("copybtn2").textContent
    navigator.clipboard.writeText(text)
}
