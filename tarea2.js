function revisaPalindromo() 
{
   var palabra = document.getElementById('palabra').value;
   var removeChar = palabra.replace(/[^A-Z0-9]/ig, "").toLowerCase();
   var checkPalindrome = removeChar.split('').reverse().join('');
   if (removeChar === checkPalindrome)
        resultadoPalindrome.textContent = 'La palabra es palindromo';     
   else
        resultadoPalindrome.textContent = 'La palabra no es palindromo';  

 }
   
 function cambiaNombre() 
 {
     var myString  = document.getElementById('nombre').value;
     let regex = /[aeiou]/gi;
     let result = myString.replace(regex, "#");
     resultadoCambiaNombre.textContent = result;     
  }
    
  function calculaEdad() 
  {
    var fechaNac  = document.getElementById('fecha').value;
    var nombre= document.getElementById('nombrecompleto').value;
    var birth = new Date(fechaNac);
    var check = new Date();
    var milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;
    var ageInDays = (check - birth) / milliDay;
    var ageInYears =  Math.floor(ageInDays / 365 );
    resultadoEdad.textContent = "Tu nombre es " + nombre + ": " + ageInYears + " años";     
   }

   function isPrime(n) 
   {
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
  }

  function calculaPrimos()
  {
          let para = document.createElement('p');
          para.innerText =  "1";
          document.getElementById('listadoPrimos').appendChild(para);   
     for (let i = 2; i < 101; i++) 
     {
        if (isPrime(i)) 
        {
          let para = document.createElement('p');
          para.innerText = i + " ";
          document.getElementById('listadoPrimos').appendChild(para);   

        }
        else
        {
          let div = document.createElement('div');
          div.innerText = i + " ";
          document.getElementById('listadoPrimos').appendChild(div);   
        }
       
     }   
  }

  
