import { addOrRemoveClass } from './helpers/addOrRemoveClass';
import { returnAge } from './helpers/calculateBirthdate';
import './Profile.css';

const birthdate = {
  day: 16,
  month: 2,
  year: 1998
}


const Profile = () => {

  return (
    <div className='container-profile'>
      <img className='img-profile' onClick={ addOrRemoveClass } src="./profile/perfil.jpg" alt="Foto de perfil" />
      <h3 className='title-age' onClick={ addOrRemoveClass } >{returnAge( birthdate )} Años</h3>
    </div>
      
  )
}

export { 
    Profile
}
