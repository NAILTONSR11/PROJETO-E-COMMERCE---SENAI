export default function temporizador(){
    
       

// set some useful variables
const SECOND_IN_MILLISECONDS = 1000;
const MINUTE_IN_MILLISECONDS = SECOND_IN_MILLISECONDS * 60;
const HOUR_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 60;
const DAY_IN_MILLISECONDS = HOUR_IN_MILLISECONDS * 24;

// countdown to a specific UNIX timestamp in the future - a day forward
const countdownTo = Date.now() + DAY_IN_MILLISECONDS;

// get the div element to render the countdown in
const countdownElement = document.querySelector('#countdown');

/**
 * Version 1 - Simple countdown with setTimeout
 * Cons:
 * - setTimeout is not precise - it is only a gurantee that callback will happen after a minimum amount of time - it can take longer
 * - can be manipulated by changing system clock (affects Date.now())
 */
const countdown = () => {
  const currentTime = Date.now();
  const timeLeft = countdownTo - currentTime;

  // out of time - stop the countdown
  if (timeLeft < 0) {
    countdownElement.innerHTML = 'Liftoff! 🚀';
    return;
  }

  // calculate time components - days, hours, minutes, seconds - use toLocaleString to format hours, minutes, seconds nicely
  const daysLeft = Math.floor(timeLeft / DAY_IN_MILLISECONDS);
  
  const hoursLeft = Math.floor(
    (timeLeft % DAY_IN_MILLISECONDS) / HOUR_IN_MILLISECONDS
  ).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  
  const minutesLeft = Math.floor(
    (timeLeft % HOUR_IN_MILLISECONDS) / MINUTE_IN_MILLISECONDS
  ).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  
  const secondsLeft = Math.floor(
    (timeLeft % MINUTE_IN_MILLISECONDS) / SECOND_IN_MILLISECONDS
  ).toLocaleString('en-US', { minimumIntegerDigits: 2 });

  // display formatted time in DOM
  countdownElement.innerHTML = `${daysLeft}d:${hoursLeft}h:${minutesLeft}m:${secondsLeft}s`;

  // call countdown again after 1 second
  setTimeout(countdown, 1000);
};

setTimeout(countdown, 1000);
    
   }





