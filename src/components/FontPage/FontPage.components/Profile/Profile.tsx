import { returnAge } from './helpers/calculateBirthdate';
import './Profile.css';

const birthdate = {
  day: 16,
  month: 2,
  year: 1998
}


const Profile = () => {

  // console.log(returnAge( birthdate ));

  return (
    <div className='container-profile'>
      <img className='img-profile' src="./profile/perfil.jpg" alt="Foto de perfil" />
      <h3 className='title-age'>{returnAge( birthdate )} Años</h3>
    </div>
      
  )
}

export { 
    Profile
}
