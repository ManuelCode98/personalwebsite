import { FontPage } from './components/FontPage/FontPage';
import { PageContent } from './components/PageContent/PageContent';
import './App.css';


const App = ()=>{
  
  return (
    <>
      <div className='container-app'> 
        <FontPage/>
        <PageContent/>
      </div>
    </>
  )
};

export {
  App
}
