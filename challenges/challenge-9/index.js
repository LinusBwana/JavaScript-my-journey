// DIGITAL CLOCK

function updateClock(){
    const date = new Date();

    let hours = date.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);

    const digitalClock = document.getElementById("digitalClock");
    digitalClock.textContent = `${hours}:${minutes}:${seconds}${amPm}`;
};

updateClock();
setInterval(updateClock, 1000);
