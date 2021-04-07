 function playSound(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;//this resets the sound of the key so you can press it as fast as you want
    audio.play();
    console.log(key);
    key.classList.add('playing'); //this adds the css playing
};

function removeTransition(e) {
    if(e.propertyName !== "transform") {return};
    //console.log(e.propertyName);
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);