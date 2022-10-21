import styled from "styled-components";
import Gallery from "./Gallery";
import ProductDetails from "./ProductDetails";
import SliderMobile from "./SliderMobile";


const MainStyle = styled.main`
    width: 91%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    padding-bottom: 132px;

    @media (min-width : 375px) and (max-width : 1439px) {
       flex-direction: column;
       margin-top: 25px;
       width: 100%;
       padding-bottom: 88px;
    }

`

const Main = () => {
    return (
        <MainStyle>
           <Gallery /> 
           <SliderMobile />
           <ProductDetails />
        </MainStyle>
    );
}

export default Main;
