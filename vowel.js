
const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result =  document.querySelector(".result");


btn.addEventListener("click",countVowel);
function countVowel(){
    let vowelcount =  0;
    let wordVal = word.value.toLowerCase();

    alert(wordVal);
}