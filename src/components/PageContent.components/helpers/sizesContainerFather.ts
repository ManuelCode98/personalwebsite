import { useScreenSize } from "../../hooks/use-screen-size";

const sizesContainerFather = ()=>{ 
    const { height } = useScreenSize();
    const cal = (( 37.6 / 100 ) * height).toFixed(2) ;
  
    const screenSize = {
        height: height && `${cal}px`,
    }

    return screenSize
};


export {
    sizesContainerFather
}    