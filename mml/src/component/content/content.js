import React from "react";
import styled from "styled-components";

import movieData, { IMAGE_URL } from "./movieData";

import MovieObject from "./movie";

const Main = styled.div`
    color: ivory;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 10px;
    justify-content: center;
`;


function Content (){

    function movieMaker(){
        let movieList = [];
        for (const movie of movieData){
            movieList.push(<MovieObject title={movie.original_title} posterPath = {`${IMAGE_URL}${movie.poster_path}`} summary={movie.overview}/>)
        };
        return movieList
    }

    return (
        <Main>
            {movieMaker()}
        </Main>
    );
};

export default Content;