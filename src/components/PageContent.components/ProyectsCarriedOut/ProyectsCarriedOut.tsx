import { useEffect, useRef, useState } from 'react';
import './ProyectsCarriedOut.css';
import { myProjects } from './myProjectsDatabase';
import { addStyleAccordingToItsIndex } from '../helpers/addStyleAccordingToItsIndex';
import { sizesContainerFather } from '../helpers/sizesContainerFather';
import { CarruselProjects } from '../helpers/carrouselProjects';


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
      <div ref={containerBoxsRef } className='container-boxs' style={sizesContainerFather()}>
        { awaitResponse && arrMyProjectsState.map( (project:any, index:number) => (
          
          <div key={project.id} className={`box-project box${project.id}`} style={addStyleAccordingToItsIndex( index )} >{project.name} {project.id}</div>
        ))}
        
      </div>
      <button className='buttons-projects' onClick={ increase }>{'>'}</button>
    </div>
    
  )
}

export {
    ProyectsCarriedOut
}
