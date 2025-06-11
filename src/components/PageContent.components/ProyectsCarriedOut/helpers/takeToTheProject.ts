
const takeToTheProject = ( { target }:any )=>{
    
    const divElementProjectClass = target.alt;
    const selectDivElementGoClass = document.querySelector(`.${ divElementProjectClass }`) 

    if( selectDivElementGoClass ){

      selectDivElementGoClass.scrollIntoView( { behavior: 'smooth' } )
      selectDivElementGoClass.classList.add( 'box-select' );

      setTimeout(() => {
        selectDivElementGoClass.classList.remove( 'box-select' );
      }, 3000);
    }
};

export {
    takeToTheProject
}