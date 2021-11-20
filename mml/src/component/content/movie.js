import React from "react";
import styled from "styled-components";



const Main = styled.div`
    color: ivory;
    width: 300px;
    text-align: center;
`;

const Poster = styled.img`

`;  

const Title = styled.h2`

`;

const Summary = styled.p`

`;


function MovieObject(props){
    return(
        <Main>
            <Poster src = {`${props.posterPath}`}/>
            <Title>{props.title}</Title>
            <Summary>{props.summary}</Summary>
        </Main>
    )
}

export default MovieObject;