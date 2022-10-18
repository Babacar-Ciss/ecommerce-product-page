import styled from "styled-components";
import Link from "next/Link";


const NAV = styled.nav`
    @media (375px <= width <= 1439px) {
        display: none;
    }
`

const UL = styled.ul`
    display: flex;
`

const LI = styled.li`
    color: #69707D;
    list-style: none;
    margin-right: 33px;
    padding-bottom: 45px;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        border-bottom: 4px solid #FF7E1B;
        padding-bottom: 41px;
        color: #1D2026;
        transition: color 0.3s;
    }
`

const A = styled.a`
    color: inherit;
    font-size: 15px;
    line-height: 26px;
    text-decoration: none;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <>
            <NAV>
                <UL>
                    <LI><Link href="/#"><A>Collection</A></Link></LI>
                    <LI><Link href="/#"><A>Men</A></Link></LI>
                    <LI><Link href="/#"><A>Women</A></Link></LI>
                    <LI><Link href="/#"><A>About</A></Link></LI>
                    <LI><Link href="/#"><A>Contact</A></Link></LI>
                </UL>
            </NAV>            
        </>
    );
}

export default Navbar;
