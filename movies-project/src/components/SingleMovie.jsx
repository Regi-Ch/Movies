import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

import DefaultImage from "/NoImage.png"

const SingleMovie = () => {
    const { id } = useParams();
    const {isLoading, error, data} = useFetch(`&i=${id}`);

    if (isLoading) {
        return <div className="loading"></div>
    }

    const { Poster, Title, Plot, Year, Country, Director, Released, Runtime, Actors, Rated, Genre } = data;
    let image = Poster === "N/A" ? DefaultImage : Poster;
    //console.log(data);

    return(
        !isLoading ?
        <div className="single-movie">
            <img src={image} alt={Title}/>
            <div className="single-info">
                <h2>{ Title }</h2>
                <p>{ Plot }</p>
                <p><strong>Director: </strong>{ Director }</p>
                <p><strong>Actors: </strong>{ Actors }</p>
                <p><strong>Genre: </strong>{ Genre }</p>
                <p><strong>Rated: </strong>{ Rated }</p>
                <p><strong>Runtime: </strong>{ Runtime }</p>
                <p><strong>Released: </strong>{ Released }</p>
                <p><strong>Country: </strong>{ Country }</p>
            </div>
        </div>
        : ''
    );
}

export default SingleMovie;