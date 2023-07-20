//your JS code here. If required.
const displayTime = () => {
    const now = new Date();
    const timeString = now.toLocaleString('en-IN', { hour12: true });
    document.getElementById('timer').textContent = timeString;
}

setInterval(displayTime, 1000);