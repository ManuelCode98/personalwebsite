import { useEffect, useRef, useState } from 'react';
import './ProyectsCarriedOut.css';
import { myProjects } from '../../../database/myProjectsDatabase';
import { addStyleAccordingToItsIndex } from '../helpers/addStyleAccordingToItsIndex';
import { CarruselProjects } from '../helpers/carrouselProjects';
import { takeToTheProject } from './helpers/takeToTheProject';


const ProyectsCarriedOut = () => {

  const containerBoxsRef = useRef<HTMLDivElement>(null)
  const [ arrMyProjectsState, setArrMyProjectsState ]:any = useState([]);  
  const [ awaitResponse, setAwaitResponse ] = useState<boolean>( false );
  
  useEffect(()=>{ 

    setArrMyProjectsState(myProjects);
    setAwaitResponse(true)
    
  },[]);

  useEffect(()=>{  
    if( awaitResponse && containerBoxsRef.current ){

      const selectDivContainerBoxs = containerBoxsRef.current;

      const selectDivBoxProject = selectDivContainerBoxs.querySelectorAll('.box-project')

      CarruselProjects( selectDivContainerBoxs, selectDivBoxProject )
    }
    
  },[awaitResponse, arrMyProjectsState]);

  const decrease = ()=>{

    const newArray = [...arrMyProjectsState]; 
    const lastItemDeleted = newArray.pop() || '';
    newArray.unshift( lastItemDeleted );
    
    setArrMyProjectsState( newArray )
    CarruselProjects(  )
  };

  const increase = ()=>{

    const newArray = [...arrMyProjectsState]; 
    const firstItemDeleted = newArray.shift() || '';
    newArray.push( firstItemDeleted );
    
    setArrMyProjectsState( newArray )
    CarruselProjects(  )
  };

  

  return (
    <div className='container-projects-and-buttons'>
      <button className='buttons-projects' onClick={ decrease }>{'<'}</button>
      <div ref={containerBoxsRef } className='container-boxs' >
        { awaitResponse && arrMyProjectsState.map( (project:any, index:number) => (
          
          <div key={project.id}
              className={`box-project`} 
              style={addStyleAccordingToItsIndex( index )} 
              onClick={ takeToTheProject }>
              <img className='img-project-small' src={project.img} alt={ `l${project.id}` } />
          </div>
        ))}
        
      </div>
      <button className='buttons-projects' onClick={ increase }>{'>'}</button>
    </div>
    
  )
}

export {
    ProyectsCarriedOut
}
