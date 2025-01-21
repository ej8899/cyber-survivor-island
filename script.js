document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('.map-area');
  const modal = document.getElementById('story-modal');
  const areaTitle = document.getElementById('area-title');
  const areaDescription = document.getElementById('area-description');
  const closeModal = document.getElementById('close-modal');
  const startChallenge = document.getElementById('start-challenge');
  

  const asciiArt = `
░█▀▀░▀▀█░█▄█░█▀▀░█▀▄░▀█▀░█▀█░░░░█▀▀░█▀█
░█▀▀░░░█░█░█░█▀▀░█░█░░█░░█▀█░░░░█░░░█▀█
░▀▀▀░▀▀░░▀░▀░▀▀▀░▀▀░░▀▀▀░▀░▀░▀░░▀▀▀░▀░▀
(C) 2025 ernie@erniejohnson.ca`;

  console.log(`%c${asciiArt}`, 'color: teal; font-family: monospace; font-size: 16px;');


  // Predefined stories for areas
  const areaStories = {
    lagoon: {
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

  // Click event for each area
  areas.forEach(area => {
    area.classList.add('incomplete');
    area.addEventListener('click', () => {
      const areaId = area.id;

      // Show modal with the area's story
      areaTitle.textContent = areaStories[areaId].title;
      areaDescription.textContent = areaStories[areaId].description;

      // Store the active area's ID on the modal for reference
      modal.dataset.activeArea = areaId;

      // Show the modal
      modal.classList.remove('hidden');
    });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Start challenge
  startChallenge.addEventListener('click', () => {
    const activeArea = modal.dataset.activeArea;

    if (activeArea) {
      alert(`Starting challenge for ${areaStories[activeArea].title}...`);

      // Mark the area as completed (visual feedback)
      const areaElement = document.getElementById(activeArea);
      areaElement.classList.remove('incomplete');
      areaElement.classList.add('completed');

      // Close the modal
      modal.classList.add('hidden');
    }
  });
});
