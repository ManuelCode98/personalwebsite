

const foundElementHtml = ( htmlContainerBoxs:any, box:any )=>{     
    
    const containerBoxs = htmlContainerBoxs.getBoundingClientRect();
    const getSizeTheBox = box.getBoundingClientRect();
    
    if( getSizeTheBox.left > containerBoxs.left && getSizeTheBox.right < containerBoxs.right ){
            
        box.classList.remove('box-opacity');          
    
        return
    } 
    
    box.classList.add( 'box-opacity' )

};

export {
    foundElementHtml
}