const nameInput = document.getElementById('name');
const greetButton = document.getElementById('greetBtn');
const message = document.getElementById('message');
const count = document.getElementById('count');

let clickCount = 0;

greetButton.addEventListener('click', () => {
  clickCount += 1;
  const name = nameInput.value.trim() || 'friend';
  message.textContent = `Hello, ${name}!`;
  count.textContent = clickCount;
});
