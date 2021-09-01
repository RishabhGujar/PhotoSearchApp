import './App.css';
import { Header } from './component/Header';
import { SearchImage } from './component/SearchImage';
import { useState } from 'react';
import { RandomImageGallery } from './component/Random';



function App() {
 
  const [query,setQuery] = useState();
  
  
  function handleChange(e){
     setQuery(e);
     console.log("iam at app",e);
  }
  
 
  console.log(query);

  return (
    <div className="Container">
        <Header handleChange={handleChange}/>
        {query ? <SearchImage query={query}/>: <RandomImageGallery/>}
    </div>
       
  );
}

export default App;
