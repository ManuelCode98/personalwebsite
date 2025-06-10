
import { SocialNetworks } from './FontPage.components/SocialNetworks/SocialNetworks';
import { Profile } from './FontPage.components/Profile/Profile';
import './FontPage.css';
import { useEffect, useState } from 'react';


const FontPage = () => {
  const [ loadState, setLoadState ] = useState( false );

  useEffect(()=>{ 
    setLoadState( true )
  },[ loadState ]);


  return (
    <div className='container-font-page'>
            <Profile/>
        <div className='container-titles'>
            <h1 className={ loadState && 'title' || undefined }>Manuel Rodriguez</h1>
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

