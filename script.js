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
      title: 'Phishing Lagoon',
      description: 'Spot and avoid dangerous phishing emails to progress!',
    },
    jungle: {
      title: 'Social Media Jungle',
      description: 'Learn to navigate fake profiles and scammy messages!',
    },
    volcano: {
      title: 'Vishing Volcano',
      description: 'Identify and stop phone scams before they erupt!',
    },
    passwords: {
      title: 'Password Cliffs',
      description: 'Create strong passwords and protect your accounts!',
    },
    darkweb: {
      title: 'Dark Web Depths',
      description: 'Learn what lingers in the depths of the Dark Web.',
    },
    shipwreck: {
      title: 'Trojan Shipwreck',
      description: 'A pirate ship was wrecked by a Trojan attack.',
    },
    market: {
      title: 'Market Scam',
      description: 'Navigate through the market and avoid scams!',
    },
    deepfakes: {
      title: 'Deep Water Deep Fakes',
      description: 'Don\'t drown in the deep fakes!',
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
