import React, {useState, useEffect} from "react";
import styled from "styled-components";

import movieData, { IMAGE_URL } from "./movieData";

import MovieObject from "./movie";

const Main = styled.div`
    color: ivory;

    padding: 10px;

`;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`;

const WishlistButton = styled.button`
    background-color: ivory;
    padding: 5px;
    bottom: 0%;
    position: fixed;

`;



function Content (){

    const[isMovieList, setIsMovieList] = useState(true);
    const[wishlist, setWishlist] = useState([]);



    function alternateList(){
        setIsMovieList((prevIsMovieList) => !prevIsMovieList)
        
    }

    
    function addToWishlist(addedMovieTitle){
        setWishlist((prevWishlist) => {
            return prevWishlist.concat(addedMovieTitle);
        })
    };
    function movieMaker(){
        let movieList = [];
        for (const movie of movieData){
            movieList.push(<MovieObject title={movie.original_title} posterPath = {`${IMAGE_URL}${movie.poster_path}`} summary={movie.overview} addToWishlist={addToWishlist}/>)
        };
        return movieList
    };

    function wishlistObjectMaker(){
        let wishlistObjectList = [];
        for (const movieTitle of wishlist){
            wishlistObjectList.push(<div><p>{movieTitle}</p></div>)
        }
        return wishlistObjectList;
    };

    if (isMovieList){
        return (
            <Main>
                <WishlistButton onClick={alternateList}>Wishlist</WishlistButton>
                <ListContainer>
                {movieMaker()}
                </ListContainer>    
            </Main>
        )
    } else {
        return (
            <Main>
                {wishlistObjectMaker()}
            </Main>
        )
    }
};

export default Content;