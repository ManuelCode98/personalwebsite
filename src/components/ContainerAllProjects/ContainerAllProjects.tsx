import './ContainerAllProjects.css';
import { myProjects } from '../../database/myProjectsDatabase';
import { useEffect, useState } from 'react';

const ContainerAllProjects = () => {

  const [ projects, setProjects ] = useState<any[]>([]);
  useEffect(()=>{ 
    setProjects( myProjects )
   },[]);  

  return (
    <div className="container-all-projects">
        { 
            projects.map( project =>(
                <div key={project.id} className='container-project'>
                    <img className='img-catalog' src='https://plus.unsplash.com/premium_photo-1726754457459-d2dfa2e3a434?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhY2tlciUyMGRlJTIwY29tcHV0YWRvcmF8ZW58MHx8MHx8fDA%3D' alt={ project.name } />
                    <div className='container-info'>0</div>
                </div>
            ))
        }
    </div>
  )
}

export {
    ContainerAllProjects
}
