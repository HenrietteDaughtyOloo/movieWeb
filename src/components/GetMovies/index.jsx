import React,{ useEffect, useState } from "react";
import getMovies from "../../utils/utilities";
import './style.css'
import ImageContainer from "../../atoms/ImageContainer";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const GetMovies = ()=>{

    const [movies, setMovies]= useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        (async()=>{
            setLoading(true)
            const movies     /* height: 50%; */
            = await getMovies();
            console.log({movies});
            setLoading(false);
            setMovies(movies.results);
            console.log(IMAGE_BASE_URL)
        })();
    },[]);

    if(loading){
        return <h1>Loading Movies ...</h1>;
    }
    
    return(
        <div className="container">
            {movies && !loading && movies.length > 0 && movies.map((item) => (
                <ImageContainer props={item}/>
           ))}

            {movies && !loading && movies.length === 0 && (<h1>No Movies Found</h1>)}
        </div>
    );
};

export default GetMovies;