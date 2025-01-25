let isMuted = false;
let musicVolume = 0;    // 0-1 (0=muted)
let maxMusicVolume = .25;
let soundVolume = 0;
let maxSoundVolume = 1;

let debug = true;


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
  const goldSound = document.getElementById('goldSound');
  const mouseSound = document.getElementById('mouseSound');

  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const totalAreas = document.querySelectorAll('.map-area:not(.info').length;

  document.addEventListener('DOMContentLoaded', alertForComputerOnly);


  // Track completed areas
  const completedAreas = new Set();
  const usedTips = new Set();

  const infoAreaData = [
    { top: '200px', left: '800px' }, 
    { top: '337px', left: '240px' }, 
    { top: '67px', left: '240px' },
    { top: '405px', left: '528px' },
  ];
  const mapContainer = document.getElementById('map'); // Replace with the container ID for your map



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
      background: './graphics/bg-phishing-cove.webp',
      description: 'Spot and avoid dangerous phishing emails to navigate safely!',
    },
    jungle: {
      title: 'Social Media Scam Safari',
      background: './graphics/bg-scam-safari.webp',
      description: 'Explore the jungle while dodging fake profiles and scammy messages!',
    },
    volcano: {
      title: 'The Vishing Volcano',
      background: './graphics/bg-volcano.webp',
      description: 'Identify and stop phone scams before they erupt!',
    },
    passwords: {
      title: 'Fortress of Passwords',
      background: './graphics/bg-passwords.webp',
      description: 'Build strong defenses with unbreakable passwords!',
    },
    darkweb: {
      title: 'Dark Web Depths',
      description: 'Learn what lingers in the depths of the Dark Web.',
    },
    shipwreck: {
      title: 'Malware Wreckage',
      background: './graphics/bg-wreckage.webp',
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

  const tips = [
    {
      tip: "Always verify the sender's email address to spot phishing attempts!",
      imageUrl: "./images/phishing-tip.png", // Replace with the actual image path
    },
    {
      tip: "Always use two-factor authentication (2FA) for extra account security!",
      imageUrl: "./images/2fa-tip.png", // Replace with the actual image path
    },
    {
      tip: "Data backups are important to protect against ransomware. Any less than 3 copies of your data is NOT a backup!",
      imageUrl: "./images/backup-tip.png", // Replace with the actual image path
    },
    {
      tip: "Strong passwords should include a mix of uppercase, lowercase, numbers, and symbols!",
      imageUrl: "./images/password-tip.png", // Replace with the actual image path
    },
    {
      tip: "Be cautious of links in unexpected emails or messages—they might be phishing attempts.",
      imageUrl: "./images/suspicious-link.png", // Replace with the actual image path
    },
  ];
  
  
  infoAreaData.forEach(position => {
    let randomTip;

    // Ensure the tip is unique
    do {
      randomTip = tips[Math.floor(Math.random() * tips.length)];
    } while (usedTips.has(randomTip));
  
    usedTips.add(randomTip);

    const uniqueId = generateGUID();

    // Create a new div for the info area
    const infoArea = document.createElement('div');
    infoArea.className = 'map-area info';
    infoArea.id = uniqueId;
    infoArea.setAttribute('data-area', 'quick tip!');
    infoArea.setAttribute('data-info', randomTip);

    // Position the area
    infoArea.style.top = position.top;
    infoArea.style.left = position.left;

    // Attach the click handler
    infoArea.addEventListener('click', () => {
      const content = infoArea.getAttribute('data-info'); // Get the info text
      if (!completedAreas.has(uniqueId)) {
        completedAreas.add(uniqueId); // Mark the area as completed
        updateProgressBar(); // Update progress
      }
      showInfoModal(randomTip.tip, randomTip.imageUrl); // Show the info modal
    });

    // Append to the map container
    mapContainer.appendChild(infoArea);
  });

  function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  



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
        if (debug==true) console.log(`INFO area clicked: ${areaId}`);
        const infoData = area.dataset.info;
        if (infoData) {
          showInfoModal(infoData);
        } else {
          if (debug==true) console.error(`Missing info data for area: ${area.id}`);
        }
      } else {
        if (debug==true) console.log("Game area clicked:", areaId);
          // Play the area click sound
        if (sfxSound) {
          let playCount = 0;

          // Function to play the sfx sound and track count
          const playSfxSound = () => {
            playCount++;
            sfxSound.currentTime = 0;
            sfxSound.play().catch(err => console.error("Error playing Sfx sound:", err));
            if (debug==true) console.log(`Sfx sound played ${playCount} times.`);
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
        if (debug==true) console.log(`Active area set to: ${areaId}`);

        // Show the modal
        modal.classList.remove('hidden');
      }
    });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  function showInfoModal(infoContent,imageUrl) {
    const modal = document.getElementById('infoModal');
    const modalContent = document.getElementById('infoModalContent');
  console.log(imageUrl)
    if (modal && modalContent) {
      modalContent.textContent = infoContent; // Display the info content
      modal.style.display = 'flex'; // Show the modal
      if (!isMuted && goldSound) {
        goldSound.currentTime = 0; 
        goldSound.play().catch(err => {
          if (debug === true) console.warn('Error playing sound:', err);
        });
      }
    } else {
      if (debug==true) console.error('Info modal elements not found!');
    }
  }
  

  // Start challenge
  startChallenge.addEventListener('click', () => {
    const activeArea = modal.dataset.activeArea;

    if (activeArea) {
      // Load the mini-game
      loadMiniGame(areaStories[activeArea].title,areaStories[activeArea].background);

      // Mark the area as completed (visual feedback)
      const areaElement = document.getElementById(activeArea);
      areaElement.classList.remove('incomplete');
      areaElement.classList.add('completed');
      
      completedAreas.add(areaElement); // Mark the area as completed
      updateProgressBar();
      // area.setAttribute('data-area', area.getAttribute('data-area'));
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


// Update progress bar
  function updateProgressBar() {
    const totalAreas = document.querySelectorAll('.map-area').length;
    const progress = Math.min(100, Math.round((completedAreas.size / totalAreas) * 100));

    // Update the progress bar and text
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;

    if (debug==true) console.log(`Progress: ${progress}% (${completedAreas.size} of ${totalAreas} areas)`);

    if (progress >= 100) {
      console.log("WIN condition met")
      createDubloons(70, 100, window.innerWidth - 100);
    }
  }


  // Function to toggle the mouse graphic visibility
  function toggleMouseGraphic() {
    const mouseGraphic = document.getElementById('mouse-graphic');
    if (!mouseGraphic) return;

    // Set random delay and visibility duration
    const randomDelay = Math.random() * (50000 - 20000) + 20000; // Random delay between 20 and 50 seconds
    const randomDuration = Math.random() * (20000 - 5000) + 5000; // Random visible duration between 5 and 20 seconds

    if (debug == true) console.log("mouse details: delay: " + parseInt(randomDelay/1000) + "s -- duration:" + parseInt(randomDuration/1000) +"s");
    // Schedule to show the graphic
    setTimeout(() => {
      mouseGraphic.style.opacity = '1'; // Fade in
        // no mouse noise if game area active
      const overlay = document.getElementById('full-screen-overlay');
    
      if (!isMuted && mouseSound && overlay.style.display == 'none') {
        // mouseSound.volume = soundVolume * 0.8;
        mouseSound.currentTime = 0; 
        mouseSound.play().catch(err => {
          if (debug === true) console.warn('Error playing mouse sound:', err);
        });
      }
      // Schedule to hide the graphic
      setTimeout(() => {
        mouseGraphic.style.opacity = '0'; // Fade out
        toggleMouseGraphic(); // Repeat the process
      }, randomDuration);
    }, randomDelay);
  }

  // Start the random appearance/disappearance
  toggleMouseGraphic();



  function loadMiniGame(gameTitle,backgroundImage) {
    console.log("Loading mini-game:", gameTitle);

    // set new BG
    showFullScreenImage(backgroundImage);

    // open info modal

    // open challenge Modal

    // open exit info Modal

    // reset the BG
    // hideFullScreenImage();
  }

  function showFullScreenImage(imagePath) {
    const overlay = document.getElementById('full-screen-overlay');
    const image = document.getElementById('full-screen-image');
    image.src = imagePath; // Set the new image
    overlay.style.display = 'flex'; // Show the overlay
  }

  function hideFullScreenImage() {
      const overlay = document.getElementById('full-screen-overlay');
      
      overlay.style.display = 'none'; 
  }

  // TEMP - click to dismiss the mini game screen
  document.getElementById('full-screen-overlay').addEventListener('click', () => {
    hideFullScreenImage();
    // enableGameInteraction();
});
  // end of DOM handler
});


// Function to detect if the user is on a mobile device
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);
}

// Function to display a message if on mobile
function alertForComputerOnly() {
  if (isMobileDevice()) {
      // Create a container for the message
      const messageContainer = document.createElement('div');
      messageContainer.style.position = 'fixed';
      messageContainer.style.top = '0';
      messageContainer.style.left = '0';
      messageContainer.style.width = '100%';
      messageContainer.style.height = '100%';
      messageContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      messageContainer.style.color = '#fff';
      messageContainer.style.display = 'flex';
      messageContainer.style.flexDirection = 'column';
      messageContainer.style.justifyContent = 'center';
      messageContainer.style.alignItems = 'center';
      messageContainer.style.zIndex = '9999';
      messageContainer.style.textAlign = 'center';
      messageContainer.innerHTML = `
          <div style="padding: 20px; max-width: 90%; font-size: 1.2em; line-height: 1.5;">
              <p>It looks like you're using a mobile device.</p>
              <p>This experience is designed for a desktop or laptop computer.</p>
              <p>Please switch to a computer for the best experience.</p>
          </div>
      `;

      // Append the message to the body
      document.body.appendChild(messageContainer);
  }
}



