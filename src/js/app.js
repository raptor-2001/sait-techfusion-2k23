

const countdown = document.querySelector('.countdown');


const countToDate = new Date('2023-04-1')
let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)

  if(countToDate <= currentDate){
    countdown.style.display = 'none';
  }
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 250)

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  const days = Math.floor(time / 86400);
  let hours24 = hours % 24;

  flip(document.querySelector("[data-days-ones]"), days % 10);
  flip(document.querySelector("[data-days-tens]"), Math.floor((days / 10) % 10));
  

  
  flip(document.querySelector("[data-hours-tens]"), Math.floor((hours24 / 10)%10))
  flip(document.querySelector("[data-hours-ones]"), hours24 % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}


// // Hide/Show functions

// const menuButton = document.getElementById('nav-button');
// const navItem = document.querySelector('nav');

// let show = true;
// function hideShow(){
//   if(show){
//     navItem.style.opacity = 0;
//     navItem.style.transform = "translateX(-500px)";
//     show = !show;
//   }else{
//     navItem.style.opacity = 1;
//     navItem.style.transform = "translateX(0px)";
//     show = !show;
//   }
// }

// menuButton.addEventListener('click', hideShow)