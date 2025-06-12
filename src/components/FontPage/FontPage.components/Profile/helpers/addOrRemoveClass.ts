

const addOrRemoveClass = ( { currentTarget }:React.MouseEvent<HTMLDivElement> )=>{ 

    if( currentTarget.classList.contains( 'img-profile' ) ){
      const selectImgProfile = currentTarget;
      const selectAge:any = selectImgProfile.nextSibling;
        selectImgProfile.classList.toggle('rotate-profile');
        selectAge.classList.toggle('show-age');
      return
    }
    if( currentTarget.classList.contains( 'title-age' ) ){

      const selectAge = currentTarget;
      const selectImgProfile:any = selectAge.previousSibling;
        selectAge.classList.toggle('show-age');
        selectImgProfile.classList.toggle('rotate-profile');
      return
    }
  };

export {
    addOrRemoveClass
}