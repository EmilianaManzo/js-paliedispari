// PALINDROMO

// Trovato su stackoverflow - Principio Kiss  

const wordinput = document.getElementById('insertword'); 
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
  const word = wordinput.value;  
  palindrome(word);
})



function palindrome(parola){
  let lunghezzaParola = Math.floor(parola.length / 2); // Divido la parola in due metà

  debugger;
  for (let i = 0; i < lunghezzaParola; i++){   
    if (parola[i] !== parola[parola.length - 1 -i]){  //Finché i caratteri di ciascuna parte corrispondono, il ciclo FOR continuerà
      document.getElementById('palindromo').innerHTML = 'La parola non è palindroma';
      return false; //Quando i caratteri non corrispondono più, viene restituito false e usciamo dal ciclo FOR
    }else{
      document.getElementById('palindromo').innerHTML = 'La parola è palindroma';
      return true; // Entrambe le parti sono rigorosamente uguali quindi è true e la parola è palindroma
    }
  }   
}





//PARI E DISPARI
const pariDispari = document.getElementById('paridispari');
const insertNumber = document.getElementById('insertnumber');
const spin = document.getElementById('spin');

console.log(pariDispari, insertNumber, spin);

spin.addEventListener('click',function(){
  const numberValue= parseInt(insertNumber.value);
  const pariDispariValue = pariDispari.value

    
  if((numberValue < 1) || (numberValue > 5)){
    alert('il numero inserito non è valido');
  }else{
    const esito = document.getElementById('esito');
    const pc = numberopc();
    const somma = numberValue + pc ;
    console.log(somma,numberValue, pc);

    document.getElementById('numberpc').innerHTML = pc;
    document.getElementById('sum').innerHTML = somma;

    pd(somma,pariDispariValue,esito);
  }

})




function numberopc(){
  const numberRandom = Math.ceil(Math.random() * 5);
  return numberRandom;

}

function pd(somma, pdv, ex ) {
  if(somma % 2 === 0 && pdv === 'pari'){
    ex.innerHTML = 'Vince il giocatore'
  }else if(somma % 2 !== 0 && pdv === 'dispari'){
    ex.innerHTML = 'Vince il giocatore'
  }else{
    ex.innerHTML = 'Vince il pc'
  }
}





