// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  
  passwordText.value = password;
}
console.log(password)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Begin Matt's Code
function generatePassword(){
  //prompt user for password length 
   passwordlength= prompt("How Many Charecters do you want your password to be?")
  //determine if password is a number
   if(!isNaN(passwordlength)){    
           } else alert("Thats Not a Number");

   //alert if password is less than 8         
    if(passwordlength<8){
       alert("Brah, Thats not a Long Enough Password");
                        } 
   //alert if password is greater then 160                       
    if(passwordlength>160){8
        var toolong=passwordlength-160
        alert("Daaaayyumm, That Password is " + toolong + " digits too long!" )
                        }
//     // password options selection
     if(passwordlength<=160 && passwordlength>=8 && !isNaN(passwordlength)) {                   
           var lowercase = confirm("Do you Want Lower Case?")
            var specialcharecters = confirm("Do you Want Special Characters?")
           var numbers = confirm("Do you Want Numbers?")
       }   
// arrays for charecter storage         
     var lowercasealpha= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
     var uppercasealpha= ["A","B","C","D","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
     var numberslist= [1,2,3,4,5,6,7,8,9,0]
     var specialcharecterslist=["!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
     var password = '';
// below is a loop if all 3 options are chosen
if(
numbers === true && specialcharecters === true && lowercase === true
){for (var i = 0; i <passwordlength;i++){  
       //selects which of the 4 arrays to choose password from 
       var arrayselectornumber = Math.floor((Math.random() * 4))
       //returns a random charecter for each array and assigns it to a variable
       var specialcharectersvar = (specialcharecterslist[(Math.floor((Math.random() * (specialcharecterslist.length - 1)) ))])
       var uppercasealphavar = (uppercasealpha[(Math.floor((Math.random() * (uppercasealpha.length - 1)) ))])
       var lowercasealphavar = (lowercasealpha[(Math.floor((Math.random() * (lowercasealpha.length - 1)) ))])
       var numbersvar = (numberslist[(Math.floor((Math.random() * (numberslist.length - 1)) ))])
    if(arrayselectornumber === 0){
       password=password.concat(specialcharectersvar);
    }
    else if(arrayselectornumber === 1){
       password=password.concat(uppercasealphavar)
           }
    else if(arrayselectornumber === 2){
       password=password.concat(lowercasealphavar)
           }
     else if(arrayselectornumber === 3){
       password=password.concat(numbersvar)
       }
}
}
// below is a loop is if special charecters and lowercase is chosen
if(
numbers === false && specialcharecters === true && lowercase === true
){for (var i = 0; i <passwordlength;i++){  
       //selects which of the 4 arrays to choose password from 
       var arrayselectornumber = Math.floor((Math.random() * 3))
       //returns a random charecter for each array and assigns it to a variable
       var specialcharectersvar = (specialcharecterslist[(Math.floor((Math.random() * (specialcharecterslist.length - 1)) ))])
       var uppercasealphavar = (uppercasealpha[(Math.floor((Math.random() * (uppercasealpha.length - 1)) ))])
       var lowercasealphavar = (lowercasealpha[(Math.floor((Math.random() * (lowercasealpha.length - 1)) ))])
       var numbersvar = (numberslist[(Math.floor((Math.random() * (numberslist.length - 1)) ))])
    if(arrayselectornumber === 0){
       password=password.concat(specialcharectersvar);
    }
    else if(arrayselectornumber === 1){
       password=password.concat(uppercasealphavar)
           }
    else if(arrayselectornumber === 2){
       password=password.concat(lowercasealphavar)
           }
         }
}
// below is a loop is if special charecters and lowercase is chosen
if(
numbers === true && specialcharecters === false && lowercase === true
){for (var i = 0; i <passwordlength;i++){  
       //selects which of the 4 arrays to choose password from 
       var arrayselectornumber = Math.floor((Math.random() * 3))
       //returns a random charecter for each array and assigns it to a variable
       var specialcharectersvar = (specialcharecterslist[(Math.floor((Math.random() * (specialcharecterslist.length - 1)) ))])
       var uppercasealphavar = (uppercasealpha[(Math.floor((Math.random() * (uppercasealpha.length - 1)) ))])
       var lowercasealphavar = (lowercasealpha[(Math.floor((Math.random() * (lowercasealpha.length - 1)) ))])
       var numbersvar = (numberslist[(Math.floor((Math.random() * (numberslist.length - 1)) ))])
    if(arrayselectornumber === 0){
       password=password.concat(numbersvar);
    }
    else if(arrayselectornumber === 1){
       password=password.concat(uppercasealphavar)
           }
    else if(arrayselectornumber === 2){
       password=password.concat(lowercasealphavar)
           }
         }
}

// below is a loop is if special charecters and lowercase is chosen
if(
numbers === true && specialcharecters === true && lowercase === false
){for (var i = 0; i <passwordlength;i++){  
       //selects which of the 4 arrays to choose password from 
       var arrayselectornumber = Math.floor((Math.random() * 3))
       //returns a random charecter for each array and assigns it to a variable
       var specialcharectersvar = (specialcharecterslist[(Math.floor((Math.random() * (specialcharecterslist.length - 1)) ))])
       var uppercasealphavar = (uppercasealpha[(Math.floor((Math.random() * (uppercasealpha.length - 1)) ))])
       var lowercasealphavar = (lowercasealpha[(Math.floor((Math.random() * (lowercasealpha.length - 1)) ))])
       var numbersvar = (numberslist[(Math.floor((Math.random() * (numberslist.length - 1)) ))])
    if(arrayselectornumber === 0){
       password=password.concat(numbersvar);
    }
    else if(arrayselectornumber === 1){
       password=password.concat(uppercasealphavar)
           }
    else if(arrayselectornumber === 2){
       password=password.concat(specialcharectersvar)
           }
         }
}
return password      
}
