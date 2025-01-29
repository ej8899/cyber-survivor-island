// Variables
let currentStep = 0; // Tracks progress through slides, quizzes, and conclusion
let currentQuizIndex = 0; // Tracks the current quiz index

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
  nextButton.style.display = "block"; // Default: show "Next" button
  console.log("updateGameModal -> ", activeGameArea);

  // Handle Slides
  if (currentStep < activeGameArea.slides.length) {
    const slide = activeGameArea.slides[currentStep];
    modalTitle.textContent = slide.title;
    modalText.textContent = slide.content;
    nextButton.textContent = "Next"; // Ensure text is "Next"
  }
  // Handle Quizzes (if any exist)
  else if (
    activeGameArea.quizzes &&
    currentStep < activeGameArea.slides.length + activeGameArea.quizzes.length
  ) {
    const quiz = activeGameArea.quizzes[currentQuizIndex];
    modalTitle.textContent = `Quiz ${currentQuizIndex + 1}`;
    modalText.textContent = quiz.question;
    quizOptions.style.display = "block"; // Show quiz options
    quizOptions.innerHTML = ""; // Clear previous options
    nextButton.style.display = "none"; // Hide "Next" button during quiz

    // Create quiz options
    quiz.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.classList.add("quiz-option"); // Add base class for quiz options

      button.addEventListener("click", () => {
        // Clear previous feedback icons
        Array.from(quizOptions.children).forEach((btn) => {
          const icon = btn.querySelector(".quiz-icon");
          if (icon) btn.removeChild(icon);
        });

        // Add feedback icon
        const icon = document.createElement("span");
        icon.classList.add("quiz-icon");
        if (choice.correct) {
          icon.textContent = "✔"; // Green check
          icon.classList.add("correct-icon");
          nextButton.style.display = "block"; // Allow progression
          playSound(gold8Sound);
        } else {
          icon.textContent = "✖"; // Red X
          icon.classList.add("incorrect-icon");
          playSound(musket6Sound);
        }
        button.appendChild(icon);
      });

      quizOptions.appendChild(button);
    });
  }
  // Handle Conclusion
  else if (
    currentStep === activeGameArea.slides.length +
      (activeGameArea.quizzes ? activeGameArea.quizzes.length : 0)
  ) {
    const conclusion = activeGameArea.conclusion;
    modalTitle.textContent = conclusion.title;
    modalText.textContent = conclusion.content;
    nextButton.textContent = "Close"; // Change button text to "Close"
  }
}

// Function to Start Game
function startGame(activeGameAreaId) {
  currentStep = 0; // Reset the current step to the start
  currentQuizIndex = 0; // Reset quiz index
  const activeGameArea = gameAreas.find((area) => area.id === activeGameAreaId);
  console.log("startGameArea -> ", activeGameAreaId);

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
  // If we're at the conclusion step, close the modal immediately
  if (
    currentStep ===
    activeGameArea.slides.length +
      (activeGameArea.quizzes ? activeGameArea.quizzes.length : 0)
  ) {
    hideGameModal();
    nextButton.onclick = null; // Clean up the listener for the next game session
    return; // Exit function early to prevent further step progression
  }

  // Handle advancing through slides and quizzes
  if (currentStep < activeGameArea.slides.length) {
    currentStep++;
  } else if (
    activeGameArea.quizzes &&
    currentQuizIndex < activeGameArea.quizzes.length
  ) {
    currentQuizIndex++;
    currentStep++; // Advance quiz step
  } else {
    currentStep++;
  }

  updateGameModalContent(activeGameArea);
}

