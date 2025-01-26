const gameAreas = [
  {
    id: "phishing",
    title: "Phishing Basics",
    slides: [
      {
        id: "slide1",
        title: "Introduction to Phishing",
        content: "Phishing is a type of cyberattack...",
        image: "phishing_intro.png",
      },
      {
        id: "slide2",
        title: "Recognizing Phishing Emails",
        content: "Look out for suspicious links...",
        image: "phishing_email.png",
      },
    ],
    quiz: {
      question: "Which is the safest action to take with a suspicious email?",
      image: "quiz_image.png",
      choices: [
        { text: "Click the link to verify", correct: false },
        { text: "Delete the email immediately", correct: true },
      ],
    },
    conclusion: {
      title: "You’ve Completed Phishing Basics!",
      content: "Great job learning about phishing attacks...",
      image: "conclusion.png",
    },
  },
  // Additional game areas...
];




// Variables
let currentStep = 0; // Tracks progress through slides, quiz, and conclusion

// DOM Elements
const modal = document.getElementById("game-modal");
const modalTitle = document.getElementById("game-modal-title");
const modalText = document.getElementById("game-modal-text");
const quizOptions = document.getElementById("game-quiz-options");
const nextButton = document.getElementById("game-next-button");


// Show Modal Function
function showGameModal() {
  modal.style.display = "flex";
}

// Hide Modal Function
function hideGameModal() {
  modal.style.display = "none";
}

function updateGameModalContent(activeGameArea) {
  quizOptions.style.display = "none"; // Hide quiz options by default

  // Handle Slides
  if (currentStep < activeGameArea.slides.length) {
    const slide = activeGameArea.slides[currentStep];
    modalTitle.textContent = slide.title;
    modalText.textContent = slide.content;
    nextButton.textContent = "Next"; // Ensure text is "Next"
  }
  // Handle Quiz
  else if (currentStep === activeGameArea.slides.length) {
    const quiz = activeGameArea.quiz;
    modalTitle.textContent = "Quiz";
    modalText.textContent = quiz.question;
    quizOptions.style.display = "block";
    quizOptions.innerHTML = ""; // Clear previous options
    quiz.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.addEventListener("click", () => {
        alert(choice.correct ? "Correct!" : "Incorrect. Try again.");
      });
      quizOptions.appendChild(button);
    });
  }
  // Handle Conclusion
  else if (currentStep === activeGameArea.slides.length + 1) {
    const conclusion = activeGameArea.conclusion;
    modalTitle.textContent = conclusion.title;
    modalText.textContent = conclusion.content;
    nextButton.textContent = "Close"; // Change button text to "Close"
  }
}

// Function to Start Game
function startGame(activeGameAreaId) {
  currentStep = 0; // Reset the current step to the start
  activeGameArea = gameAreas.find(area => area.id === activeGameAreaId);

  // Reset button text
  nextButton.textContent = "Next";

  // Attach the initial event listener
  nextButton.onclick = function () {
    nextStep(activeGameArea);
  };

  // Initialize the modal content and display it
  updateGameModalContent(activeGameArea);
  showGameModal();
}

function nextStep(activeGameArea) {
  currentStep++;

  // If we're beyond the conclusion step, clean up and close the modal
  if (currentStep > activeGameArea.slides.length + 1) {
    hideGameModal();
    nextButton.onclick = null; // Clean up the listener for the next game session
  } else {
    updateGameModalContent(activeGameArea);
  }
}
