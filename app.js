const submitForm = document.querySelector('#submitForm');
const randomInput = document.querySelector('#randomInput');
const guessInput = document.querySelector('#guessInput');
const button = document.querySelector('#playButton');
const result = document.querySelector('#result');
const finalResult = document.querySelector('#finalResult');

submitForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

button.addEventListener('click', () => {
  const guessValue = parseInt(guessInput.value);
  const randomValue = Math.round(Math.random() * randomInput.value);
  if (randomValue >= 0) {
    result.innerText = `You chose: ${guessValue}, the machine chose: ${randomValue}.`;
    if (guessValue === randomValue) {
      finalResult.innerText = 'You won!';
    } else {
      finalResult.innerText = 'You lost!';
    }
  }
});
