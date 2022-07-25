
const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result =  document.querySelector(".result");


btn.addEventListener("click",countVowel);
function countVowel(){
    let vowelcount =  0;
    let wordVal = word.value.toLowerCase();

    for(let i = 0; i < wordVal.length; i++){
        let letter = wordVal[i];
    if(letter.match(/([a,e,i,o,u])/)){
            vowelcount++
    }
    }

    result.innerHTML = `${word.value.toUpperCase()} has 
    ${vowelcount} vowels`;
}