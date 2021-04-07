const cable = document.querySelectorAll('input[type="checkbox"]')
console.log(cable[0]);

let lastChecked;

function handCheck(e) {
    console.log(e);
    let inBetween = false;
    
    if(e.shiftKey && this.checked) {
       cable.forEach(checkbox => {
          console.log(checkbox) 
          if(checkbox === this || checkbox === lastChecked) {
              inBetween = !inBetween;
          }
          if(inBetween) {
              checkbox.checked = true;
          }
       }) 
    }
lastChecked = this;
};

cable.forEach(checkbox => checkbox.addEventListener('click',handCheck))