import { useState } from 'react';
import { RandomImage } from '../api/api';
import { Gallery } from './Gallery';
 
function RandomImageGallery(){

const [pageNumber,setpageNumber] = useState(1);
 
const{loading,error,imageData,more} =   RandomImage(pageNumber);
console.log(loading,error,imageData,more);
function handlePageNumber(){
    setpageNumber((prevPageNumber)=>prevPageNumber+1);
}



 const load = loading ? <div className="center"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> : <Gallery imageData={imageData} handlePageNumber={handlePageNumber}/>
 return <>
    {load}
 </>
}
export {RandomImageGallery};
