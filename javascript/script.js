// PALINDROMO

// Trovato su stackoverflow - Principio Kiss  

const word = prompt('Inserisci una parola');


function palindrome(string){
  let lunghezzaParola = Math.floor(word.length / 2);
  for (let i = 0; i < lunghezzaParola; i++){
    if (word[i] !== word[word.length - i - 1]){
      document.getElementById('palindromo').innerHTML = 'La parola non è palindroma';
      return false;
    }else{
      document.getElementById('palindromo').innerHTML = 'La parola è palindroma';
      return true;
    }
  }   
}


palindrome(word);
console.log(palindrome(word));