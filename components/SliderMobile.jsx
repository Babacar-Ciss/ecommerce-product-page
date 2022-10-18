import styled from "styled-components";
import { useState } from "react";

const SliderMobileStyle = styled.div`
     display: none;
     z-index: 1;
    
     @media (375px <= width <= 1439px) {
        display: block;
        width: 100%;
        height: 50%;
        margin-inline: auto;
        height: 300px;
        position: relative;
        margin-bottom: 24px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top : 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #FFF;
        cursor: pointer;
    }
    }
    
    
    
`

const MainImage = styled.img`
    width: 100%;
    height: 100%;
`

const ArrowLeftContainer = styled.div`
    left: 24px;
`

const ArrowRightContainer = styled.div`
    right: 15px;
`

const SliderMobile = () => {
    const [position, setPosition] = useState(1);

    if(position === 5) {
        setPosition(1);
    }else if (position === 0) {
        setPosition(4);
    }

    const nextImage = () => {
        setPosition(+position + 1)
    }

    const prevImage = () => {
        setPosition(+position - 1)
    }

    return (
        <SliderMobileStyle>
                        <ArrowLeftContainer onClick={ () =>  prevImage()}>  <img src="./assets/icon-previous.svg" alt="Arrow Left"/>  </ArrowLeftContainer>
                        <ArrowRightContainer onClick={ () =>  nextImage()}> <img src="./assets/icon-next.svg" alt="Arrow Right"/>    </ArrowRightContainer>
                        <MainImage src= {`./assets/image-product-${position}.jpg`} alt= {`Image-product-${position}`}/>
        </SliderMobileStyle>
    );
}

export default SliderMobile;
