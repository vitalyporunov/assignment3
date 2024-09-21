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

// Progress bar functionality
function updateProgressBar() {
    const totalQuestions = {{ quiz_data["questions"]|length }}; 
    const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
    const progressPercent = (answeredQuestions / totalQuestions) * 100;
  
    document.getElementById('progress-bar').style.width = progressPercent + '%';
function checkAnswer(selectedOption, correctAnswer) {
     // ... (feedback logic) ...
      
    // Add a class to show the feedback with transition
    feedbackElement.classList.add('show'); 
      
    // Play sound effects
    if (selectedOption.value === correctAnswer) {
          playCorrectSound();
     } else {
          playIncorrectSound();
        }
      }
  }

  // Feedback functionality
  function checkAnswer(selectedOption, correctAnswer) {
    const feedbackElement = selectedOption.parentNode.querySelector('.feedback');
    if (selectedOption.value === correctAnswer) {
      feedbackElement.textContent = "Correct!";
      feedbackElement.classList.add('correct');
      feedbackElement.classList.remove('incorrect');
    } else {
      feedbackElement.textContent = "Incorrect. The correct answer is " + correctAnswer;
      feedbackElement.classList.add('incorrect');
      feedbackElement.classList.remove('correct');
    }
  } 

// Function to play correct answer sound
function playCorrectSound() {
    const audio = new Audio('{{ url_for("static", filename="sounds/correct.mp3") }}'); // Replace with your sound file
    audio.play();
  }
  
  // Function to play incorrect answer sound
  function playIncorrectSound() {
    const audio = new Audio('{{ url_for("static", filename="sounds/incorrect.mp3") }}'); // Replace with your sound file
    audio.play();
  }
  // Get the time limit from the input field
const timeLimitInput = document.getElementById('time-limit');
let timeLeft = timeLimitInput.value; // Initialize timeLeft with the input value
const timerElement = document.getElementById('time');

// Update the timer display initially
timerElement.textContent = timeLeft;

// Add an event listener to the input field to update the timer when the value changes
timeLimitInput.addEventListener('change', function() {
  timeLeft = this.value;
  timerElement.textContent = timeLeft;
});

const timerInterval = setInterval(function() {
  // ... (rest of the timer logic) ...
}, 1000);
// Theme selection functionality
const themeSelect = document.getElementById('theme');

themeSelect.addEventListener('change', function() {
  document.body.classList.remove('light', 'dark', 'blue'); // Remove existing theme classes
  document.body.classList.add(this.value); // Add the selected theme class
});