const checkButton = document.getElementById("check-btn");
const header = document.querySelector("h1");
const input = document.getElementById("text-input");
const main = document.querySelector(".main");

let reset = false;

const resultElement = document.createElement("p");
let resultText = document.createTextNode("");

// let reset = false;

function checkPalindrome() {
    const filteredStr = input.value.replace(/[^0-9a-z]/gi, '');
    const reversedStr = filteredStr.split("").reverse().join("");

    if (filteredStr.toLowerCase() === reversedStr.toLowerCase()) {
        if (filteredStr) {
            resultText.nodeValue = "It is a palindrome!";

            resultElement.appendChild(resultText);
            main.appendChild(resultElement);
        }

        console.log("it is a palindrome!!!");
    } else {
        if (filteredStr) {
            resultText.nodeValue = "It is not a palindrome :(";

            resultElement.appendChild(resultText);
            main.appendChild(resultElement);
        }

        console.log("it is not a palindrome");
    }

    input.value = "";
};

checkButton.addEventListener("click", checkPalindrome);