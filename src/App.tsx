import { FontPage } from './components/FontPage/FontPage';
import { PageContent } from './components/PageContent/PageContent';
import './App.css';
import { ContainerAllProjects } from './components/ContainerAllProjects/ContainerAllProjects';


const App = ()=>{
  
  return (
    <>
      <div className='container-app'> 
        <FontPage/>
        <PageContent/>
      </div>
      <div className='container-app2'>
        <ContainerAllProjects/>
      </div>
    </>
  )
};

export {
  App
}
