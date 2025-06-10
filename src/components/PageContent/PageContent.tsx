import { ProyectsCarriedOut } from "../PageContent.components/ProyectsCarriedOut/ProyectsCarriedOut"
import './PageContent.css';


const titleMore:string =  'Ver mas...' 
const PageContent = () => {
  return (
    <div className="container-projects">
      <ProyectsCarriedOut/>
      <h3 className="title-more">{ titleMore }</h3>
    </div>
  )
}

export {
  PageContent
}
