import React from "react";
import styled from "styled-components";

import logo from "./Logo.png";

const Main = styled.div`
    align-items: center;
    background-color: #060621;
    color: ivory;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 10px;
`;



const Title = styled.h1`
`;

const Logo = styled.img`
    max-width: 150px;
`;



function Header(){
    return (
        <Main>
            <Title> My Movie List</Title>
            <Logo src={logo}/>
        </Main>
    );
};



export default Header;