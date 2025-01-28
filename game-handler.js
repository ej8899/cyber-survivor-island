

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
  nextButton.style.display = "block"; // Default: show "Next" button
console.log("updateGameModal -> ", activeGameArea)
  // Handle Slides
  if (currentStep < activeGameArea.slides.length) {
    const slide = activeGameArea.slides[currentStep];
    modalTitle.textContent = slide.title;
    modalText.textContent = slide.content;
    nextButton.textContent = "Next"; // Ensure text is "Next"
  }
  // Handle Quiz (only if a quiz exists)
  else if (currentStep === activeGameArea.slides.length) {
    if (activeGameArea.quiz) {
      const quiz = activeGameArea.quiz;
      modalTitle.textContent = "Quiz";
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
          Array.from(quizOptions.children).forEach(btn => {
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
          } else {
            icon.textContent = "✖"; // Red X
            icon.classList.add("incorrect-icon");
          }
          button.appendChild(icon);
        });

        quizOptions.appendChild(button);
      });
    } else {
      // Skip quiz step if no quiz exists
      currentStep++;
      updateGameModalContent(activeGameArea);
    }
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
  const activeGameArea = gameAreas.find(area => area.id === activeGameAreaId);

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
