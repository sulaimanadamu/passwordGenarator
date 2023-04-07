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
}

