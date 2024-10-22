const checkButton = document.getElementById("check-btn");
const header = document.querySelector("h1");
const input = document.getElementById("text-input");
const main = document.querySelector(".main");

const resultElement = document.createElement("p");
resultElement.id = "result";
let resultText = document.createTextNode("");

function checkPalindrome() {
    const filteredStr = input.value.replace(/[^0-9a-z]/gi, '');
    const reversedStr = filteredStr.split("").reverse().join("");
    
    if (!filteredStr) {
        alert("Please input a value");
    } else if (filteredStr.toLowerCase() === reversedStr.toLowerCase()) {
        if (filteredStr) {
            resultText.nodeValue = `${input.value} is a palindrome`;

            resultElement.appendChild(resultText);
            main.appendChild(resultElement);
        }

        console.log("it is a palindrome!!!");
    } else {
        if (filteredStr) {
            resultText.nodeValue = `${input.value} is not a palindrome`;

            resultElement.appendChild(resultText);
            main.appendChild(resultElement);
        }

        console.log("it is not a palindrome");
    }

    input.value = "";
};

checkButton.addEventListener("click", checkPalindrome);