import './ContainerAllProjects.css';
import { myProjects } from '../../database/myProjectsDatabase';
import { useEffect, useRef, useState } from 'react';

let passRefOfTheDiv:any; 

const ContainerAllProjects = () => {

  const refDivElement = useRef<HTMLDivElement>(null);
  const [ selectDivSection, setSelectDivSection ] = useState<HTMLDivElement>()
  const [ projects, setProjects ] = useState<any[]>([]);
  useEffect(()=>{ 
    setProjects( myProjects )
   },[]);
      
  useEffect(()=>{

    const elementDiv = refDivElement.current
    
    if(elementDiv){
      setSelectDivSection( elementDiv )
      passRefOfTheDiv = selectDivSection;
    }
  },[ projects ]);


  return (
    <div ref={ refDivElement } className="container-all-projects">
        { 
            projects.map( project =>(
                <div key={project.id} className={ `container-project l${ project.id }` }>
                    <img className='img-catalog' src={ project.img } alt={ project.name } />
                    <div className='container-info'>
                      <h3 className='title-name-project'>{ project.name }</h3>
                      { project.linkWeb.length > 1 ?
                        <p className={`link-prototipo`}><a href={ project.linkWeb } target='_blank'>Link de la web</a></p>
                        :<p className={`link-prototipo`}><a href={ project.linkPrototype } target='_blank'>Ver prototipo</a></p> 
                      }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export {
    ContainerAllProjects,
    passRefOfTheDiv
}
