// Timer functionality
let timeLeft = 60; // Initial time in seconds
const timerElement = document.getElementById('time');

const timerInterval = setInterval(function() {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);   

    // Automatically submit the quiz when the timer runs out
    document.querySelector('form').submit(); 
    alert("Time's up! Quiz submitted.");
  }
}, 1000); // Update the timer every 1000ms (1 second)

function updateProgressBar() {
    const totalQuestions = {{ quiz_data["questions"]|length }}; 
    const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
    const progressPercent = (answeredQuestions / totalQuestions) * 100;
  
    document.getElementById('progress-bar').style.width = progressPercent + '%';
  }