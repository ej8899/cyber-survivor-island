document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audioPlayer');
  const muteButton = document.getElementById('muteButton');

  // Ensure the toggleButtons function is globally accessible
  window.toggleButtons = function (isPlaying) {
      // Logic to toggle buttons if needed
  };

  // Function to toggle mute
  function toggleMute() {
    isMuted = !isMuted;

    setVolume();
    updateMuteButton();
  }

  // Function to set volume based on mute state
  function setVolume() {
    if (isMuted) {
      audioPlayer.volume = 0; // Mute background music
      sfxSound.volume = 0; // Mute sound effects
    } else {
      audioPlayer.volume = maxMusicVolume;
      sfxSound.volume = maxSoundVolume; 
    }
  }

  // Update the mute button text
  function updateMuteButton() {
    muteButton.textContent = isMuted ? 'Unmute Sounds' : 'Mute Sounds';
  }

  // Attach toggleMute to the mute button
  muteButton.addEventListener('click', toggleMute);

  // end of event listener function
});

// Define the playTrack function globally
function playTrack(startTime, endTime) {
  console.log("playTrack called with startTime:", startTime, "endTime:", endTime);
  reduceVolumeTo(maxMusicVolume); 

  if(startTime === 0 && endTime === 0) {
      // TODO deprecated - see mute system
      reduceVolumeTo(0)
      return;
  }

  const audio = document.getElementById('audioPlayer'); // Ensure this matches your HTML
  if (!audio) {
      console.error("Audio element not found!");
      return;
  }

  // Set the start time and play
  audio.currentTime = startTime;
  audio.play();

  // Stop playback when the end time is reached
  const loopPlayback = () => {
      if (audio.currentTime >= endTime) {
          audio.currentTime = startTime; // Restart the track
          audio.play();
      }
  };

  // Add an event listener for looping
  audio.addEventListener('timeupdate', loopPlayback);

  // Remove the event listener when the audio is paused
  audio.onpause = () => {
      audio.removeEventListener('timeupdate', loopPlayback);
  };
}

function reduceVolumeTo(value) {
    const audio = document.getElementById('audioPlayer');
    if (!audio) {
        console.error("Audio element not found!");
        return;
    }

    //const newVolume = Math.max(0, Math.min(1, percent / 100)); // Convert percentage to range 0-1
    audio.volume = value;

    console.log(`Volume set to ${value * 100}%`);
}

