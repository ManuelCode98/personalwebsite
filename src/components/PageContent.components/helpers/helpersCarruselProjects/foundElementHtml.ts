

const foundElementHtml = ( htmlContainerBoxs:any, box:any )=>{     
    
    const containerBoxs = htmlContainerBoxs.getBoundingClientRect();
    const getSizeTheBox = box.getBoundingClientRect();
    
    if( getSizeTheBox.left > containerBoxs.left && getSizeTheBox.right < containerBoxs.right ){
            
        box.classList.toggle('box-opacity');          
    
        return
    } 
    
    box.classList.toggle( 'box-opacity' )

};

export {
    foundElementHtml
}