const userText = document.getElementById('text-input');
const checkPalindromeButton = document.getElementById('check-btn');
const resultPart = document.getElementById('result');

const checkPalindrome = input => {
  const realInput = input;
  if (input === ""){
    alert("Please input a value");
    return;
  }

  resultPart.replaceChildren();

  const highCase = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${realInput}</strong> ${
    highCase === [...highCase].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const spanPart = document.createElement("span");
  spanPart.className = "user-input";
  spanPart.innerHTML = resultMsg;
  resultPart.appendChild(spanPart);

  resultPart.classList.remove("hidden");
};

checkPalindromeButton.addEventListener('click', () => {
  checkPalindrome(userText.value);
  userText.value = '';
});

userText.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkPalindrome(userText.value);
    userText.value = '';
  }
});
