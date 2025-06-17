

const selectButtonClock = document.querySelector('.btn-clock');

const selectCronometer = document.querySelector('.crono__time')
const selectCicleProcess = document.querySelector('.cicle-process');
const ratio = 150;
const ratioCircumference = 2 * Math.PI * ratio;

    setInterval(() => {

        const date = new Date();
        const dateHours = date.getHours()
        const dateMinutes = date.getMinutes()
        const dateSeconds = date.getSeconds();

        const totalPorcentageCircle = dateSeconds / 59;
        const offset = ratioCircumference * ( 1 - totalPorcentageCircle );

        selectCronometer.innerHTML = `${dateHours}:${dateMinutes}`
        selectCicleProcess.style.strokeDashoffset = offset;

    }, 1000);    

