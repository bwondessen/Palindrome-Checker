const checkButton = document.getElementById("check-btn");
const header = document.querySelector("h1");
const input = document.getElementById("text-input");

function checkPalindrome() {
    let filteredStr = input.value.replace(/[^0-9a-z]/gi, '');
    let reversedStr = filteredStr.split("").reverse().join("");

    if (filteredStr.toLowerCase() === reversedStr.toLowerCase()) {
        console.log("it is a palindrome!!!");
    } else {
        console.log("it is not a palindrome");
    }
};

checkButton.addEventListener("click", checkPalindrome);