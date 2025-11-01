const chars =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const genPasswordBtn = document.getElementById("gen-pw-btn");
const leftPwBtn = document.getElementById('left-pw-btn')
const rightPwBtn = document.getElementById('right-pw-btn')


function genPassword() {
  genPasswordBtn.addEventListener("click", function() { 
    let pw = "";
    let strongPw = "";

    for (let i = 0; i < 16; i += 1) {
      pw += randomChar(62)
      strongPw += randomChar(82)
    }
      leftPwBtn.textContent = pw
      rightPwBtn.textContent = strongPw
  });
}

function randomChar(len) {
  let i = Math.floor(Math.random() * len)
  return chars[i]
}

genPassword();
