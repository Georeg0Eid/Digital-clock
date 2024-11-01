function updateTime() {
    const timeElement = document.getElementById('time');
    const ampmElement = document.getElementById('ampm');

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedHours = hours.toString().padStart(2, '0');

    // Update time display
    timeElement.textContent = `${formattedHours}:${minutes}:${seconds}`;
    ampmElement.textContent = ampm;
  }

  // Update the clock every second
  setInterval(updateTime, 1000);
  updateTime(); // Initialize clock immediately on load