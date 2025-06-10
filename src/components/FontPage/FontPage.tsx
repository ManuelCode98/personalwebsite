
import { SocialNetworks } from '../FontPage.components/SocialNetworks/SocialNetworks';
import { Profile } from '../FontPage.components/Profile/Profile';
import './FontPage.css';


const FontPage = () => {
  return (
    <div className='container-font-page'>
        <div className='container-profile'>
            <Profile/>
        </div>
        <div className='container-titles'>
            <h1 className='title'>Manuel Rodriguez</h1>
            <h2 className='sub-title'>Programador Freelance Full Stack</h2>
        </div>
        <div className='container-social-networks'>
            <SocialNetworks/>
        </div>
    </div>

  )
}

export {
    FontPage 
}

