// Selectors
const password = document.getElementById("password");
const lengthBar = document.getElementById("lengthBar");
const uppercaseCheckBox = document.getElementById("uppercaseCheck");
const numbersCheckBox = document.getElementById("numbersCheck");
const symbolsCheckBox = document.getElementById("symbolsCheck");

// Initial Variables
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "0123456789";
const symbols = '~!@#$%^&*()_+{}":?><;.,';

// Show the password
document.getElementById("generateBtn").onclick = function () {
  password.style.display = "block";
  document.getElementById("copyBtn").style.display = "block";
  document.getElementById("generateBtn").style.display = "none";
  if (password.textContent.length === 0) {
    main();
  }
};

// =========================== Utility Functions ===========================

// Function to shuffle (randomly sort) an array's elements
const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

// Function to generate random password for the given string and arr passed as arguments
const generateRandomPassword = (str, arr) => {
  let randomGeneratedPassword = str.substring(
    Math.floor(Math.random() * arr),
    lengthBar.value
  );
  password.textContent = randomGeneratedPassword;
};

// =========================== Main ===========================
const main = () => {
  document.getElementById("lengthText").textContent = lengthBar.value;
  // Generate password for lowercase
  generatePasswordLowerCase();

  // Generate password when uppercase checkbox is checked
  if (uppercaseCheckBox.checked) generatePasswordUpperCase();

  // Generate password when numbers checkbox is checked
  if (numbersCheckBox.checked) generatePasswordNumbers();

  // Generate password when symbols checkbox is checked
  if (symbolsCheckBox.checked) generatePasswordSymbols();

  // Generate password when uppercase and numbers is checked
  if (uppercaseCheckBox.checked && numbersCheckBox.checked) {
    const upperLowerCaseString = lowercase.concat(uppercase);
    const numUpLowString = upperLowerCaseString.concat(numbers);
    let numUpperLowerArr = numUpLowString.split("");
    shuffleArr(numUpperLowerArr);
    let newNumUpperLowerStringCase = numUpperLowerArr.join("");
    generateRandomPassword(newNumUpperLowerStringCase, numUpperLowerArr);
  }

  // Generate password when uppercase and symbols is checked
  if (uppercaseCheckBox.checked && symbolsCheckBox.checked) {
    const upperLowerCaseString = lowercase.concat(uppercase);
    const symUpLowString = upperLowerCaseString.concat(symbols);
    let symUpperLowerArr = symUpLowString.split("");
    shuffleArr(symUpperLowerArr);
    let newSymUpperLowerStringCase = symUpperLowerArr.join("");
    generateRandomPassword(newSymUpperLowerStringCase, symUpperLowerArr);
  }

  // Generate password when numbers and symbols is checked
  if (numbersCheckBox.checked && symbolsCheckBox.checked) {
    const numLowerCaseString = lowercase.concat(numbers);
    const symNumLowString = numLowerCaseString.concat(symbols);
    let symNumLowerArr = symNumLowString.split("");
    shuffleArr(symNumLowerArr);
    let newSymNumLowerStringCase = symNumLowerArr.join("");
    generateRandomPassword(newSymNumLowerStringCase, symNumLowerArr);
  }

  // Generate password when uppercase, numbers and symbols is checked
  if (
    uppercaseCheckBox.checked &&
    numbersCheckBox.checked &&
    symbolsCheckBox.checked
  ) {
    const upLowString = lowercase.concat(uppercase);
    const numUpLowerCaseString = upLowString.concat(numbers);
    const symNumUpLowString = numUpLowerCaseString.concat(symbols);
    let symNumUpLowerArr = symNumUpLowString.split("");
    shuffleArr(symNumUpLowerArr);
    let newSymNumUpLowerStringCase = symNumUpLowerArr.join("");
    generateRandomPassword(newSymNumUpLowerStringCase, symNumUpLowerArr);
  }
};

// =========================== Functions ===========================

// Function to generate password for lowercase
const generatePasswordLowerCase = () => {
  let lowercaseArr = lowercase.split("");
  shuffleArr(lowercaseArr);
  let newLowerCase = lowercaseArr.join("");
  generateRandomPassword(newLowerCase, lowercaseArr);
};

// Function to generate password for uppercase
const generatePasswordUpperCase = () => {
  const upperLowerCaseString = lowercase.concat(uppercase);
  let upperLowerArr = upperLowerCaseString.split("");
  shuffleArr(upperLowerArr);
  let newUpperLowerStringCase = upperLowerArr.join("");
  generateRandomPassword(newUpperLowerStringCase, upperLowerArr);
};

// Function to generate password for numbers
const generatePasswordNumbers = () => {
  const numLowerString = lowercase.concat(numbers);
  let numLowerArr = numLowerString.split("");
  shuffleArr(numLowerArr);
  let newNumLowerString = numLowerArr.join("");
  generateRandomPassword(newNumLowerString, numLowerArr);
};

// Function to generate password for symbols
const generatePasswordSymbols = () => {
  const symbolLowerString = lowercase.concat(symbols);
  let symbolLowArr = symbolLowerString.split("");
  shuffleArr(symbolLowArr);
  let newSymbolLowString = symbolLowArr.join("");
  generateRandomPassword(newSymbolLowString, symbolLowArr);
};

// Function to copy the password
const copyPasswordToClipboard = () => {
  let text = password.textContent;
  let input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.parentNode.removeChild(input);
  document.querySelector(".alert").style.opacity = 1;
  setTimeout(() => {
    document.querySelector(".alert").style.opacity = 0;
  }, 2000);
};

// Event on the length bar
lengthBar.addEventListener("input", main);
