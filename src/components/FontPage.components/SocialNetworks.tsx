
const linkLinkedin = 'https://www.linkedin.com/in/manuel-rodriguez-ba5b5b339/';
const linkWhatsapp = 'https://wa.me/3157382433';
const linkInstagram = 'https://www.instagram.com/manuelr098/';
const linkFacebook = 'https://www.facebook.com/profile.php?id=100001364317304';

const linkedinIcon = 'https://i.ibb.co/Pz0jD6WL/linkedin.png';
const whatsappIcon = 'https://i.ibb.co/zTjx3RBS/whatsapp.png';
const instagramIcon = 'https://i.ibb.co/qYrwCPY8/instagram.png';
const facebookIcon = 'https://i.ibb.co/mCJW684V/facebook.png';

const SocialNetworks = () => {
  return (
    <div>
      <span className='container-social-networks'>
        <a href={ linkLinkedin }  target='_blank' > <img className='icons linkedin-icon' src={linkedinIcon} /> </a>
        <a href={ linkWhatsapp }  target='_blank' > <img className='icons whatsapp-icon' src={whatsappIcon} /> </a>
        <a href={ linkInstagram } target='_blank' > <img className='icons instagram-icon' src={instagramIcon} /> </a>
        <a href={ linkFacebook }  target='_blank' > <img className='icons facebook-icon' src={facebookIcon} /> </a>
      </span>
    </div>
  )
}

export {
    SocialNetworks
}
