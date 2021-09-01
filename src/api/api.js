import { useState,useEffect } from "react";
import axios from "axios";


    function RandomImage(pageNumber){
        const [loading,setLoading] = useState(true)
        const [error,setError] = useState(false);
        const [imageData,setImagesData] = useState([]);
        const [more,setMore] = useState(false);
    
    
    
        useEffect(()=>{
            setLoading(true);
            setError(false);
            let cancel
            axios({
                method:"GET",
                url : "https://api.unsplash.com/photos/",
                params:{page:pageNumber,client_id : "JH-EhuMlzWWZJ9gBuZucxfdW-V7cIUY1_UD0TPdh7AI"},
                cancelToken: axios.CancelToken(c=>cancel=c)
            }).then(res=>{
                console.log(res);
                 setImagesData(prevImages=>{
                     return [...prevImages,...res.data];
                    
                 });
                 setMore(res.data.length>0)
                 setLoading(false);
            }).catch(e=>{
                if(axios.isCancel(e)) return;
                setError(true);
            })
            return ()=>cancel()
        },[pageNumber])
    
        return {loading,error,imageData,more}
    }
   




function useImageSearch(query,pageNumber){
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false);
    const [imageData,setImagesData] = useState([]);
    const [more,setMore] = useState(false);


    useEffect(()=>{
        setImagesData([]);
    },[query]);


    useEffect(()=>{
        setLoading(true);
        setError(false);
        let cancel
        axios({
            method:"GET",
            url : "https://api.unsplash.com//search/photos",
            params:{query:query,page:pageNumber,client_id : "JH-EhuMlzWWZJ9gBuZucxfdW-V7cIUY1_UD0TPdh7AI"},
            cancelToken: axios.CancelToken(c=>cancel=c)
        }).then(response=>{
                setImagesData(prevImages=>{
                console.log(response);
                 return [...prevImages,...response.data.results];
                })
             console.log(response.data);
             setLoading(false);
             setMore(response.data.results>0)
            
        }).catch(e=>{
            if(axios.isCancel(e)) return;
            setError(true);
            setLoading(false);
        })
        return ()=>cancel()
    },[query,pageNumber])

    return {loading,error,imageData,more}
}

export {RandomImage,useImageSearch};