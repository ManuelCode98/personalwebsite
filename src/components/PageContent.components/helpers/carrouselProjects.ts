
// import { useState } from "react";
import { foundElementHtml } from "./helpersCarruselProjects/foundElementHtml";



const CarruselProjects = ( selectDivContainerBoxs?:any, divBoxProject?:any )=>{ 

   if(divBoxProject){
     divBoxProject.forEach( (elementHtml:any) => {
   
      if( !elementHtml ) return; 
      
      foundElementHtml( selectDivContainerBoxs, elementHtml )
      
      })
   } 

};

export {
    CarruselProjects
}   