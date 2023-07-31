import React, { useState } from "react";
import './style.css';
import { searchMovies } from "../utils/utilities";

const Navigate = ()=>{
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults]= useState([])
    const handleInput = (event)=>{
        setSearchValue(event.target.value);
    };
    const handleSearch = async()=>{
        const results = await searchMovies(searchValue);
        setSearchResults(results.results);


    }

    return(
        <div className="Navbar">
            <nav className="nav">
                <div>
                <h1 className="logo">

                       M<b>oo</b>vie 

                    </h1>
                </div>
                <div className="Searching" >
                    <input className="Search1"
                    value={searchValue}
                    placeholder="Enter the movie name to search"
                    onChange={handleInput}
                    type="text" />

                    <button className="Search" onClick={handleSearch}> Search</button>
                </div>

                <div className="links">

                    <li><a className="home" href="#">Home</a></li>
                    <li className="home">My list</li>
                    <li><button className="sign-in">Sign In</button></li>


                </div>
                </nav>


                    {searchResults.length > 0 && (
                        <div className="search-results">
                            {searchResults.map((movie) =>(
                                <div key={movie.id} className="search-result">
                                    <img 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}                                    
                                    />
                                    <h2>{movie.title}</h2>
                                    <p>{movie.overview}</p>

                                </div>
                           ) )
                           };

                        </div>
                    )}

            </div>

    );
 };
export default Navigate


