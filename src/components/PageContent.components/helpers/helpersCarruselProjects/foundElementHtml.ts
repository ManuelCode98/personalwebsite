

const foundElementHtml = ( htmlContainerBoxs:any, box:any )=>{     
    
    const containerBoxs = htmlContainerBoxs.getBoundingClientRect();
    const getSizeTheBox = box.getBoundingClientRect();

    if( getSizeTheBox.left > containerBoxs.left && getSizeTheBox.right < containerBoxs.right ){
        
        const findClass = box.className.includes('box-opacity');
        
        if( findClass ){
            box.classList.remove('box-opacity');          
        }
        return
    } 
    box.classList.add( 'box-opacity' )


    // if( getSizeTheBox < 1 ){

    //     box.classList.add( 'box-opacity' )
    
    // }

    // if( getSizeTheBoxRight > containerBoxs ){

    //     box.classList.add( 'box-opacity' )
    // }

};

export {
    foundElementHtml
}