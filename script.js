var generateBtn = document.querySelector("#generate");
var uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "@", "#", "$", "%", "&", "*", "~", "_", "-", "+", "=", "<", ">", "?"];

generateBtn.addEventListener("click", writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
 
    var userLength = 0;

    
    var passwordArray = [];

    console.log(passwordArray);
    
    var resultsArray = [];

    
    var userIntro = confirm("Do you want to set up your password?");
    if (userIntro) {
        userLength = prompt("Choose the length of your password, between 8 and 128 characters.");

        if ((userLength < 8) || (userLength > 128)) {
            prompt("Please enter a number between 8 and 128.");
        }
        else {
            confirm("Your password will be " + userLength + " characters long.");
        }
        console.log(userLength);

        
        var confirmUcase = confirm("Include uppercase letters?");

        
        var confirmLcase = confirm("Include lowercase letters?");

        
        var confirmNums = confirm("Include numbers?");

        
        var confirmCharacters = confirm("Include special characters?");

        
        if (confirmUcase === true) {
            alert("You want to include uppercase letters.");
            Array.prototype.push.apply(passwordArray, uCase);
            console.log(confirmUcase);
        }

        else if (confirmUcase === false) {
            alert("Yo do not want to include uppercase letters.");
            console.log(confirmUcase);
        }

        if (confirmLcase === true) {
            alert("You want to include lowercase letters.");
            Array.prototype.push.apply(passwordArray, lCase);
            console.log(confirmLcase);
        }

        else if (confirmLcase === false) {
            alert("Yo do not want to include lowercase letters.");
            console.log(confirmLcase);
        }

        if (confirmNums === true) {
            alert("You want to include numbers.");
            Array.prototype.push.apply(passwordArray, nums);
            console.log(confirmNums);
        }

        else if (confirmNums === false) {
            alert("Yo do not want to include numbers.");
            console.log(confirmNums);
        }

        if (confirmCharacters === true) {
            alert("You want to include special characters.");
            Array.prototype.push.apply(passwordArray, characters);
            console.log(confirmCharacters);
        }

        else if (confirmCharacters === false) {
            alert("Yo do not want to include special characters.");
            console.log(confirmCharacters);
        }

       
        if (confirmUcase === false && confirmLcase === false && confirmNums === false && confirmCharacters === false) {
            alert("You have not selected any valid criteria for a password, please start over.");
            generatePassword();
        }

        }
        var selection = [];
        
        for (var i = 0; i < userLength; i++) {
            var randomChar = passwordArray[randomizer(0, passwordArray.length)];
            selection.push(randomChar);
        }
        var result = selection.join("");
        return result;
        }
        function randomizer(min, max) {
            var r = Math.random() * (max - min) - 1;
            return Math.round(r);
    }
    