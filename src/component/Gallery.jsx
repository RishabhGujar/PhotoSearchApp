import InfiniteScroll from "react-infinite-scroll-component";
import Model from "./model";
import Masonry from 'react-masonry-css'
const breakpoints={
    default: 3,
    1100: 2,
    700: 2,
    500: 1
}
const Gallery = ({imageData,handlePageNumber})=>{
    return <>
        <InfiniteScroll 
          dataLength={imageData.length}
          next={handlePageNumber}
          hasMore={true}
          loader={<div className="center"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
       > 
       <Masonry
         breakpointCols={breakpoints}
         className="my-masonry-grid"
         columnClassName="my-masonry-grid_column">
            
            {imageData.map((el,index)=>{
             return <div>
                 < Model img={el.urls.small} normal={el.urls.regular} key={index} alt={el.alt_description}/>
            </div>}
           )} 
           
        </Masonry>
       </InfiniteScroll> 
       </>   
}

export{Gallery};

