

const selectButtonStart = document.querySelector('.crono__start');
const selectButtonStop = document.querySelector('.crono__pause');

const selectCronometer = document.querySelector('.crono__time')
const selectCicleProcess = document.querySelector('.cicle-process');
const ratio = 150;
const ratioCircumference = 2 * Math.PI * ratio;

let stopInterval;
// console.log(ratioCircumference);


selectButtonStart.addEventListener( 'click', (e)=>{

    let minutes;
    let seconds;

    if( localStorage.length ){
        minutes = parseInt( localStorage.getItem('minutes') ) || 0;
        seconds = parseInt( localStorage.getItem('seconds') ) || 0;
        selectButtonStop.innerHTML = 'Pausar';
    }    

    const initialInterval = setInterval(() => {

        const totalPorcentageCircle = seconds / 59;
        const offset = ratioCircumference * ( 1 - totalPorcentageCircle );
        
        seconds = seconds + 1;

        if (seconds === 59 ) {
            
            minutes = minutes + 1;
            seconds = 0
        }
        if( minutes === 99 && seconds === 59 ){

            stopInterval = Interval()
        }

        localStorage.setItem('minutes', minutes)
        localStorage.setItem('seconds', seconds)

        selectCronometer.innerHTML = `${minutes}:${seconds}`
        selectCicleProcess.style.strokeDashoffset = offset;

    }, 1000);

    stopInterval = ( )=>{ 

        clearInterval( initialInterval )
        
    }; 

});


selectButtonStop.addEventListener( 'click', ({ target })=>{



        if( target.innerHTML === 'Pausar' ){       
            
            selectButtonStop.innerHTML = 'Reiniciar';
            stopInterval( 'initialInterval' )

            return
        }
        
        if( target.innerHTML === 'Reiniciar' ){

            stopInterval( 'initialInterval' )
            localStorage.setItem('minutes', 0)
            localStorage.setItem('seconds', 0)
            minutes = 0
            seconds = 0

            selectCronometer.innerHTML = `${minutes}:${seconds}`

            selectButtonStop.innerHTML = 'Pausar';
        }

    })


