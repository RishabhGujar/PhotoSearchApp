import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';



const Header = ({handleChange})=>{
    const filter = createFilterOptions();
    const[value,setValue] = useState('')
  
    let array=[] ;
    let storage = localStorage.getItem("localKey");
    if(storage){
      
      array = [...array,...JSON.parse(storage)]
      array = [...[...new Set(array.map((el)=>el.title))].map(el=>{return {title : el}})]
     
    }
    if(value){
        array = [...array,value]
        array = [...[...new Set(array.map((el)=>el.title))].map(el=>{return {title : el}})]
        const stringify = JSON.stringify(array);        
        localStorage.setItem("localKey",stringify);
        handleChange(value.title);
        setValue('');
      
    }
        
        
    
   
    return  <div className="headContainer">
         <h1>Search Photos</h1>
         <div className="inputContainer">
         <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
          
        } else if (newValue && newValue.inputValue) {
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={array}
      getOptionLabel={(option) => {
      
        if (typeof option === 'string') {
          return option;
        }
        
        if (option.inputValue) {
          return option.inputValue;
        }
     
        return option.title;
      }}
      renderOption={(array) => array.title}
      style={{ backgroundColor: "white" ,width: '50vw', padding: '2px 2px 2px 2px'  ,borderRadius: '5px'}}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Images" variant="outlined" />
      )}
    />
   
     </div>
     </div>

}


export{Header}