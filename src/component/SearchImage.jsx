import { useImageSearch } from "../api/api";
import { useState } from 'react';
import { Gallery } from "./Gallery";
import { Error } from "./Error";



const SearchImage = ({query})=>{

    const [pageNumber,setpageNumber] = useState(1);
     
    function handlePageNumber(){
        setpageNumber((prevPageNumber)=>prevPageNumber+1);
    }
    
      
    const{loading,error,imageData,more} =   useImageSearch(query,pageNumber);
    console.log(loading,error,imageData,more);
    
     
     const load = error || imageData.length===0 ? <Error/> :loading ? <div className="center"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> : <Gallery imageData={imageData} handlePageNumber={handlePageNumber}/>
     return <>
         
        {load}
     </>
    }

    export {SearchImage};