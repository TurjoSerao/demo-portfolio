function updateDateTime() {
  const now = new Date();

  // Time & Date
  const time = now.toLocaleTimeString();
  const date = now.toDateString();

  // Display
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}

// Run immediately
updateDateTime();
// Update every second
setInterval(updateDateTime, 1000);
