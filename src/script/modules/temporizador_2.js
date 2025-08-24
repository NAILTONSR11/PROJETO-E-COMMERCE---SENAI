export default function limitado(){


function countdownTimer() {

    const timerElements = document.querySelectorAll('.cronometros');

    
    const durationHours = 3;
    const durationMinutes = 12;
    const durationSeconds = 54;


    const totalDurationMilliseconds = 
        (durationHours * 60 * 60 * 1000) + 
        (durationMinutes * 60 * 1000) + 
        (durationSeconds * 1000);

    
    const targetDate = new Date().getTime() + totalDurationMilliseconds;

    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

  
        if (distance < 0) {
            clearInterval(timerInterval);
            timerElements[0].textContent = "00";
            timerElements[1].textContent = "00";
            timerElements[2].textContent = "00";
            timerElements[3].textContent = "00";
            return;
        }

   
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

       
        timerElements[0].textContent = String(days).padStart(2, '0');
        timerElements[1].textContent = String(hours).padStart(2, '0');
        timerElements[2].textContent = String(minutes).padStart(2, '0');
        timerElements[3].textContent = String(seconds).padStart(2, '0');
    }

 
    const timerInterval = setInterval(updateTimer, 1000);

  
    updateTimer();
}

countdownTimer();




}