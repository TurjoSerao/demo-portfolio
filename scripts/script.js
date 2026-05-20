// Get date and time

const now = new Date();
const time = now.toLocaleTimeString();
const date = now.toDateString()

document.getElementById('time').innerHTML = time;
document.getElementById('date').innerHTML = date;