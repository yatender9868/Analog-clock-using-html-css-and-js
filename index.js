console.log("loading...")

console.log("loading...");

// Get references to the DOM elements
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

setInterval(() => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const hrotation = 30 * hours + minutes / 2;
    const mrotation = 6 * minutes;
    const srotation = 6 * seconds;

    // Set the transform property on the DOM elements
    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);
