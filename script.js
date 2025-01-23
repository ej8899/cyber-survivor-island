let isMuted = false;
let musicVolume = 0;    // 0-1 (0=muted)
let maxMusicVolume = .25;
let soundVolume = 0;
let maxSoundVolume = 1;


document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('.map-area');
  const modal = document.getElementById('story-modal');
  const areaTitle = document.getElementById('area-title');
  const areaDescription = document.getElementById('area-description');
  const closeModal = document.getElementById('close-modal');
  const startChallenge = document.getElementById('start-challenge');
  const infoAreas = document.querySelectorAll('.map-area.info');

  // Handle Credits Button
  const creditsButton = document.getElementById('creditsButton');
  const creditsModal = document.getElementById('creditsModal');
  const closeCreditsButton = document.getElementById('closeCreditsButton');

  const instructionsModal = document.getElementById('instructionsModal');
  const closeInstructionsButton = document.getElementById('closeInstructionsButton');

  const skullAndBones = document.getElementById('skull-and-bones');

  const sfxSound = document.getElementById('sfxSound');

  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const totalAreas = document.querySelectorAll('.map-area:not(.info').length;
  // const gameAreas = document.querySelectorAll('.map-area:not(.info)').length;
  let completedProgress = 0;

  const asciiArt = `
░█▀▀░▀▀█░█▄█░█▀▀░█▀▄░▀█▀░█▀█░░░░█▀▀░█▀█
░█▀▀░░░█░█░█░█▀▀░█░█░░█░░█▀█░░░░█░░░█▀█
░▀▀▀░▀▀░░▀░▀░▀▀▀░▀▀░░▀▀▀░▀░▀░▀░░▀▀▀░▀░▀
(C) 2025 ernie@erniejohnson.ca`;

  console.log(`%c${asciiArt}`, 'color: teal; font-family: monospace; font-size: 16px;');

  // Show the modal on load
  instructionsModal.style.display = 'flex';

  // Close the modal when the button is clicked
  closeInstructionsButton.addEventListener('click', () => {
    instructionsModal.classList.add('hidden'); // Add the fade-out class

    // Start the music after the fade-out transition
    setTimeout(() => {
      instructionsModal.style.display = 'none'; // Ensure modal is removed after fading
      playTrack(0, 139); // Start the music
    }, 500); // Match the transition duration (0.5s)
  });

  // Predefined stories for areas
  const areaStories = {
    phishing: {
      title: 'Phishing Cove',
      description: 'Spot and avoid dangerous phishing emails to navigate safely!',
    },
    jungle: {
      title: 'Social Media Scam Safari',
      description: 'Explore the jungle while dodging fake profiles and scammy messages!',
    },
    volcano: {
      title: 'The Vishing Volcano',
      description: 'Identify and stop phone scams before they erupt!',
    },
    passwords: {
      title: 'Fortress of Passwords',
      description: 'Build strong defenses with unbreakable passwords!',
    },
    darkweb: {
      title: 'Dark Web Depths',
      description: 'Learn what lingers in the depths of the Dark Web.',
    },
    shipwreck: {
      title: 'Malware Wreckage',
      description: 'A pirate ship was sunk by malware. Recover its secrets!',
    },
    market: {
      title: 'Fraud Bazaar',
      description: 'Navigate the island marketplace and spot scams before it\’s too late!',
    },
    deepfakes: {
      title: 'Deep Water... Deep Fakes',
      description: '🌊 Dive into the world of deception on Cyber-Survivor Island\'s “Deep Water, Deep Fakes,” where you\’ll uncover how to spot manipulated media and protect yourself from falling for convincing but false digital creations. 🔍🎥',
    },
    blackmail: {
      title: 'Extortion Point',
      description: 'Face and thwart the threats of online blackmailers.',
    },
  };

  // Track completed areas
  const completedAreas = new Set();

  // Function to show modal
  function showModal(content) {
    const modal = document.getElementById('infoModal');
    const modalContent = document.getElementById('infoModalContent');
    
    modalContent.textContent = content; // Set modal content
    modal.style.display = 'flex'; // Show the modal
  }

  // Close the modal
  const closeIModal = () => {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';
  };

  // Attach event listeners to informational map areas
  infoAreas.forEach(area => {
    area.addEventListener('click', () => {
      const content = area.getAttribute('data-info'); // Get info text
      showModal(content);
    });
  });

  // Close modal on clicking outside or close button
  document.getElementById('infoModalClose').addEventListener('click', closeIModal);
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('infoModal');
  
    // Ensure only clicks outside of the modal trigger close
    if (event.target === modal) {
      closeIModal();
    }
  });


  // Click event for each area
  areas.forEach(area => {
    area.classList.add('incomplete');
    area.addEventListener('click', () => {
      const areaId = area.id;

      if (area.classList.contains('info')) {
        // Handle info modal
        console.log(`INFO area clicked: ${areaId}`);
        const infoData = area.dataset.info;
        if (infoData) {
          showInfoModal(infoData); // Custom function to show the info modal
        } else {
          console.error(`Missing info data for area: ${area.id}`);
        }
      } else {
        console.log("Game area clicked:", areaId);
          // Play the area click sound
        if (sfxSound) {
          let playCount = 0;

          // Function to play the sfx sound and track count
          const playSfxSound = () => {
            playCount++;
            sfxSound.currentTime = 0;
            sfxSound.play().catch(err => console.error("Error playing Sfx sound:", err));
            console.log(`Sfx sound played ${playCount} times.`);
            if (playCount < 2) {
              sfxSound.onended = playSfxSound; // Play again when the first play ends
            } else {
              sfxSound.onended = null; // Remove the event listener after the second play
            }
          };

          playSfxSound(); // Start the first play
        }
        // Show modal with the area's story
        // console.log(`No story found for area: ${areaId}`);
  
        areaTitle.textContent = areaStories[areaId].title;
        areaDescription.textContent = areaStories[areaId].description;

        // Store the active area's ID on the modal for reference
        modal.dataset.activeArea = areaId;
        console.log(`Active area set to: ${areaId}`);

        // Show the modal
        modal.classList.remove('hidden');
      }
    });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  function showInfoModal(infoContent) {
    const modal = document.getElementById('infoModal');
    const modalContent = document.getElementById('infoModalContent');
  
    if (modal && modalContent) {
      modalContent.textContent = infoContent; // Display the info content
      modal.style.display = 'flex'; // Show the modal
    } else {
      console.error('Info modal elements not found!');
    }
  }
  

  // Start challenge
  startChallenge.addEventListener('click', () => {
    const activeArea = modal.dataset.activeArea;

    if (activeArea) {
      alert(`Starting challenge for ${areaStories[activeArea].title}...`);

      // Mark the area as completed (visual feedback)
      const areaElement = document.getElementById(activeArea);
      areaElement.classList.remove('incomplete');
      areaElement.classList.add('completed');
      
      // Update progress bar
      if (!completedAreas.has(areaElement)) {
        completedAreas.add(areaElement); // Mark the area as completed
        // areaElement.classList.add('completed'); // Apply completed styling

        // Calculate progress percentage
        const progress = Math.min(100, Math.round((completedAreas.size / totalAreas) * 100));

        // Update the progress bar and text
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;

        console.log(`Progress: ${progress}%`);
      }

      // Close the modal
      modal.classList.add('hidden');
    }
  });


  function triggerRandomRotation() {
    if (!skullAndBones) return;

    // Add the animation class
    skullAndBones.classList.add('rotating');

    // Remove the animation class after it completes (2 seconds)
    setTimeout(() => {
      skullAndBones.classList.remove('rotating');
    }, 2000);

    // Schedule the next rotation at a random interval (3-7 seconds)
    const nextInterval = Math.random() * (7000 - 3000) + 3000;
    // console.log(`Next rotation scheduled in ${nextInterval / 1000} seconds.`);
    setTimeout(triggerRandomRotation, nextInterval);
  }
  triggerRandomRotation();

  // Open Credits Modal
  creditsButton.addEventListener('click', () => {
    if (creditsModal) {
      creditsModal.style.display = 'flex';
    }
  });

  // Close Credits Modal
  closeCreditsButton.addEventListener('click', () => {
    if (creditsModal) {
      creditsModal.style.display = 'none';
    }
  });

  // end of DOM handler
});



