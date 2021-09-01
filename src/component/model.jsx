import { Button } from "@material-ui/core";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
export default function Model(props) {
    const[isOpen,setIsopen] = useState(false)
    const{img,alter,id,normal} =props
      return (
        <>
 
          <Button onClick={()=>{setIsopen(true)}}><img className='image' id={id} src={img} alt={alter}/></Button>
          {isOpen && (
            <Lightbox
              mainSrc={normal}
              onCloseRequest={() =>setIsopen(false)}
            />
          )}
        </>
      );
    }
  