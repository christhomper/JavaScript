const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input.trim(); // Trim input to handle leading/trailing spaces

  if (originalInput === '') {
    alert('Please input a value');
    return;
  }

  resultDiv.innerHTML = ''; // Clear previous result

  const alphanumericStr = originalInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const isPalindrome = alphanumericStr === [...alphanumericStr].reverse().join('');

  const resultMsg = `<strong>${originalInput}</strong> ${isPalindrome ? 'is' : 'is not'} a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  // Show the result.
  resultDiv.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
