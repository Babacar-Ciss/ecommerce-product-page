import styled from "styled-components";
import Link from "next/link";
import Store from "../hooks/Store";


const OverlayStyle = styled.div`
    display: none;
    z-index: 200;
    
    @media (min-width : 375px) and (max-width : 1439px) {
        display: block;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.75);
    }
`

const Menu = styled.div`
    width: 66.7%;
    height: 100%;
    background-color: #FFF;
    padding: 24px 0 0 25px;
`


const NAV = styled.nav`

`

const UL = styled.ul`
    display: flex;
    flex-direction: column;
`

const LI = styled.li`
    list-style: none;
    margin-bottom: 20px;
`

const A = styled.a`
    color: #1D2026;
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
`

const IMG = styled.img`
    margin-bottom: 54px;
    cursor: pointer;
`


const Overlay = () => {
    const CloseMenuModal = Store((state) => state.CloseMenuModal);

    return (
        <OverlayStyle>
            <Menu>
              <IMG src="./assets/icon-close.svg" 
                   alt="close the modal" 
                   onClick={CloseMenuModal}/>
              <NAV>
                <UL>
                    <LI><Link href="/collection"><A>Collection</A></Link></LI>
                    <LI><Link href="/collection"><A>Men</A></Link></LI>
                    <LI><Link href="/collection"><A>Women</A></Link></LI>
                    <LI><Link href="/collection"><A>About</A></Link></LI>
                    <LI><Link href="/collection"><A>Contact</A></Link></LI>
                </UL>
              </NAV>            
            </Menu>
        </OverlayStyle>
    );
}

export default Overlay;
