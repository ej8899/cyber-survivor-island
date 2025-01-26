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
    nextButton.textContent = "Close";
    nextButton.addEventListener("click", hideGameModal);
  }
}

// Function to Start Game
function startGame(activeGameAreaId) {
  currentStep = 0; // Reset to the start of the game
  const activeGameArea = gameAreas.find(area => area.id === activeGameAreaId);

  console.log("startGame -> activeGameArea:", activeGameArea);
  updateGameModalContent(activeGameArea);
  showGameModal();

  // Handle Next Button Click
  nextButton.onclick = function () {
    currentStep++;
    if (currentStep <= activeGameArea.slides.length + 1) {
      updateGameModalContent(activeGameArea);
    }
  };
}