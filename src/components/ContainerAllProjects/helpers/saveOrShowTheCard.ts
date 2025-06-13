

const saveOrShowTheCard = ( { currentTarget }:React.MouseEvent<HTMLDivElement> )=>{ 

    if( window.innerWidth <= 767 ){

        const selectContainerProject = currentTarget;
        const selectImgCatalog = selectContainerProject.children[0];
        const selectContainerInfo = selectContainerProject.children[1];

        if( selectImgCatalog.classList.contains('img-catalog-hover') && selectContainerInfo.classList.contains('container-info-hover')){

            selectImgCatalog.classList.remove('img-catalog-hover')
            selectContainerInfo.classList.remove('container-info-hover')
        }
        selectImgCatalog.classList.toggle('img-catalog-movil');
        selectContainerInfo.classList.toggle('container-info-movil');  
    }
};


export {
    saveOrShowTheCard
}