
import { SocialNetworks } from './FontPage.components/SocialNetworks';
import { Profile } from './FontPage.components/Profile';
import '../assets/components/FontPage.css';


const FontPage = () => {
  return (
    <div className='container-font-page'>
        <div className='container-titles'>
            <h1>Manuel Rodriguez</h1>
            <h2>Programador Freelance Full Stack</h2>
        </div>
        <div className='container-profile'>
            <Profile/>
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

