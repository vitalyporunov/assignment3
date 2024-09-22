// Timer functionality
const timeLimitInput = document.getElementById('time-limit');
let timeLeft = timeLimitInput.value; 
const timerElement = document.getElementById('time');

timerElement.textContent = timeLeft;

timeLimitInput.addEventListener('change', function() {
  timeLeft = this.value;
  timerElement.textContent = timeLeft;
});

const timerInterval = setInterval(function() {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);   

    document.querySelector('form').submit(); 
    alert("Time's up! Quiz submitted.");
  }
}, 1000);


// Progress bar functionality
function updateProgressBar() {
  const totalQuestions = document.querySelectorAll('.question').length;
  const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
  const progressPercent = (answeredQuestions / totalQuestions) * 100;

  document.getElementById('progress-bar').style.width = progressPercent + '%';
}

// Instant feedback functionality
function checkAnswer(selectedOption, correctAnswer) {
  const feedbackElement = selectedOption.parentNode.querySelector('.feedback');
  if (selectedOption.value === correctAnswer) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.classList.add('correct');
    feedbackElement.classList.remove('incorrect');
    playCorrectSound();
  } else {
    feedbackElement.textContent = "Incorrect. The correct answer is " + correctAnswer;
    feedbackElement.classList.add('incorrect');
    feedbackElement.classList.remove('correct');
    playIncorrectSound();
  }
  feedbackElement.classList.add('show'); 
}

// Sound effects
function playCorrectSound() {
  const audio = new Audio('{{ url_for("static", filename="sounds/correct.mp3") }}');
  audio.play();
}

function playIncorrectSound() {
  const audio = new Audio('{{ url_for("static", filename="sounds/incorrect.mp3") }}'); 
  audio.play();
}

// Theme selection functionality
const themeSelect = document.getElementById('theme');

themeSelect.addEventListener('change', function() {
  document.body.classList.remove('light', 'dark', 'blue'); 
  document.body.classList.add(this.value); 
});