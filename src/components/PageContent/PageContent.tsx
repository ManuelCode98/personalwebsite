import { ProyectsCarriedOut } from "../PageContent.components/ProyectsCarriedOut/ProyectsCarriedOut"
import './PageContent.css';
import { passRefOfTheDiv } from "../ContainerAllProjects/ContainerAllProjects";


const titleMore:string =  'Ver mas' 
const PageContent = () => {

  const goToTheSection = ( divElement:HTMLDivElement )=>{ 
    
    if( divElement )divElement.scrollIntoView( { behavior: 'smooth' } );
  };

  return (
    <div className="container-projects">
      <ProyectsCarriedOut/>
      <h3 className="title-more" onClick={ ()=>goToTheSection( passRefOfTheDiv ) }>{ titleMore }</h3>
    </div>
  )
}

export {
  PageContent
}
