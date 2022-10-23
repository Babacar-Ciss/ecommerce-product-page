import Navbar from "./Navbar";
import Panier from "./Panier";
import Commandes from "./Commandes";
import Store from "../hooks/Store";

import styled from "styled-components";


const HeadStyle = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E4E9F2;

    @media (min-width : 375px) and (max-width : 1439px) {
        border: none;
        padding-inline: 24px;
    }
`

const IMGLogo = styled.img`
    margin-right: 56px;
    padding-bottom: 45px;
    
    @media (min-width : 375px) and (max-width : 1439px) {
        margin-right: 0;
        padding-bottom: 0;
    }
`

const IMGUser = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 46px;
    margin-right: 0;
    margin-top: -12px;
    align-self: flex-start;
    cursor: pointer;
    outline: 1px solid transparent;
    transition: all .1s;

    @media (min-width : 375px) and (max-width : 1439px) {
        width: 24px;
        height: 24px;
        margin-left: 22px;
        margin-top: 0;
    }

    &:hover {
        outline: 2px solid #FF7E1B;
    }
`

const IMGHamburger = styled.img`
    display: none;
    cursor: pointer;

    @media (min-width : 375px) and (max-width : 1439px) {
        display: block;
        align-self: center;
        margin-right: 16px;
        margin-bottom: -5px;
    }
`

const Head = () => {

    const OpenMenuModal = Store((state) => state.OpenMenuModal);
    const setShowCartClose  = Store((state) => state.setShowCartClose);

    return (
        <HeadStyle>
            <IMGHamburger 
                        src="./assets/icon-menu.svg" 
                        alt="Hamburger Menu" 
                        onClick={ () => {OpenMenuModal(); setShowCartClose()}}/>

            <IMGLogo src="./assets/logo.svg" alt="logo " />
            <Navbar />
            <Panier />
            <IMGUser src="./assets/image-avatar.png" alt="logo user" />
            <Commandes />
        </HeadStyle>
    );
}

export default Head;
