
const takeToTheProject = ( { target }:any )=>{
    
    const divElementProjectClass = target.alt;
    const selectDivElementGoClass = document.querySelector(`.${ divElementProjectClass }`) 

    if( selectDivElementGoClass ){

      selectDivElementGoClass.scrollIntoView( { behavior: 'smooth' } )
      selectDivElementGoClass.classList.toggle( 'box-select' );

      setTimeout(() => {
        selectDivElementGoClass.classList.toggle( 'box-select' );
      }, 3000);
    }
};

export {
    takeToTheProject
}