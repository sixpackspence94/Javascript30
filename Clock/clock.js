const secondHand = document.querySelector('.secHand');
const mintHand = document.querySelector('.minHand');
const hrHand = document.querySelector('.hourHand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDeg}deg)`;
    
    console.log(seconds);

    const mints = now.getMinutes();
    const minDeg = ((mints / 60) * 360) + ((seconds / 60) * 6) + 90;
    mintHand.style.transform = `rotate(${minDeg}deg)`;

    const hours = now.getHours();
    const hrDeg = ((hours / 12) * 360) + ((mints/60)*30) + 90;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;
};

setInterval(setDate, 1000);