const greetings = [
  'Hello World! 👋',
  'Halo Dunia! 🌍',
  'Selamat datang! 🎉',
  'Great job! 🚀',
  'Keep going! 💪',
  'You are awesome! ⭐'
];

let greetingIndex = 0;

document.getElementById('btn-greet').addEventListener('click', function() {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = greetings[greetingIndex];
  greetingIndex = (greetingIndex + 1) % greetings.length;
});

document.getElementById('btn-clear').addEventListener('click', function() {
  document.getElementById('message').textContent = '';
  greetingIndex = 0;
});
