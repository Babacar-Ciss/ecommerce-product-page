import Head from "./Head";

import styled from "styled-components";
import Overlay from "./Overlay";
import Store from "../hooks/Store";
import ModalGallery from "./ModalGallery";
import StoreAnnexe from "../hooks/StoreAnnexe";

const LayoutStyle = styled.div`
    width: 77%;
    padding-top: 41px;
    margin-inline: auto;

    @media (min-width : 375px) and (max-width : 1439px) {
        width: 100%;
        padding-top: 19px;
    }
`

const Layout = ({children}) => {

   const MenuModal = Store((state) => state.MenuModal);
   const showModalGallery= StoreAnnexe((state) => state.showModalGallery);


    return (
        <LayoutStyle>
            <Head />
            {/* {MenuModal ? <Overlay /> : null} */}
            <Overlay />
            {showModalGallery ? <ModalGallery /> : null}         
            {children}
        </LayoutStyle>
    );
}

export default Layout;
