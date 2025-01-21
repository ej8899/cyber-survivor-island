document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('.map-area');
  const modal = document.getElementById('story-modal');
  const areaTitle = document.getElementById('area-title');
  const areaDescription = document.getElementById('area-description');
  const closeModal = document.getElementById('close-modal');
  const startChallenge = document.getElementById('start-challenge');

  // Predefined stories for areas
  const areaStories = {
    lagoon: {
      title: 'Phishing Lagoon',
      description: 'You find yourself at the Phishing Lagoon. Spot and avoid dangerous phishing emails to progress!',
    },
    jungle: {
      title: 'Social Media Jungle',
      description: 'In the Social Media Jungle, learn to navigate fake profiles and scammy messages!',
    },
    volcano: {
      title: 'Vishing Volcano',
      description: 'Face the Vishing Volcano! Identify and stop phone scams before they erupt!',
    },
  };

  // Click event for each area
  areas.forEach(area => {
    area.addEventListener('click', () => {
      const areaId = area.id;
      const story = areaStories[areaId];
      areaTitle.textContent = story.title;
      areaDescription.textContent = story.description;
      modal.classList.remove('hidden');
    });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Start challenge (you can replace this with challenge logic)
  startChallenge.addEventListener('click', () => {
    alert('Challenge starting...');
    modal.classList.add('hidden');
  });
});
