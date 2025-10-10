

const foundElementHtml = ( htmlContainerBoxs:any, box:any )=>{     
    
    const containerBoxs = htmlContainerBoxs.getBoundingClientRect();
    const getSizeTheBox = box.getBoundingClientRect();
    
    if( getSizeTheBox.left > containerBoxs.left && getSizeTheBox.right < containerBoxs.right ){
           
        box.classList.remove('box-opacity');
        box.classList.add('box-not-opacity')                    
    
        return
    }
    
    // if( getSizeTheBox.left < containerBoxs.left && getSizeTheBox.right < containerBoxs.right ){
    //         console.log('2');
    //     box.classList.add('box-opacity');          
    
    //     return
    // } 

    // if( getSizeTheBox.left > containerBoxs.left && getSizeTheBox.right > containerBoxs.right ){
    //         console.log('3');
    //     box.classList.add('box-opacity');          
    
    //     return
    // } 
    
    box.classList.add( 'box-opacity' )
    box.classList.remove( 'box-not-opacity' )

};

export {
    foundElementHtml
}