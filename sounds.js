document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audioPlayer');

  // Ensure the toggleButtons function is globally accessible
  window.toggleButtons = function (isPlaying) {
      // Logic to toggle buttons if needed
  };

  // You can still define other initialization logic here if needed
});

// Define the playTrack function globally
function playTrack(startTime, endTime) {
  console.log("playTrack called with startTime:", startTime, "endTime:", endTime);
  reduceVolumeTo(55); 

  if(startTime === 0 && endTime === 0) {
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

function reduceVolumeTo(percent) {
    const audio = document.getElementById('audioPlayer');
    if (!audio) {
        console.error("Audio element not found!");
        return;
    }

    const newVolume = Math.max(0, Math.min(1, percent / 100)); // Convert percentage to range 0-1
    audio.volume = newVolume;

    console.log(`Volume set to ${newVolume * 100}%`);
}

