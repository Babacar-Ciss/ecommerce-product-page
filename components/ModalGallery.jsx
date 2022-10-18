import styled from "styled-components";
import { useState } from "react";
import Store from "../hooks/store";
import StoreAnnexe from "../hooks/StoreAnnexe";


const ModalGalleryStyle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999999;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);

`

const Container = styled.div`
    width: 550px;
    z-index: 1;
    position: absolute;
    top: 89px;
    left: 50%;
    transform : translateX(-50%);
    display: flex;
    flex-wrap: wrap;
`

const IMGCloseModal = styled.img`
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(1%) hue-rotate(343deg) brightness(104%) contrast(101%);    margin-right: 0;
    margin-left: auto;
    margin-bottom: 24px;
    cursor: pointer;

    &:hover {
        filter: brightness(0) saturate(100%) invert(60%) sepia(21%) saturate(5756%) hue-rotate(347deg) brightness(101%) contrast(101%);        
        transition: all 0.2s;
    }
`

const MainImageContainer = styled.div`
    width: 550px;
    height: 550px;
    position: relative;
    margin-bottom: 40px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top : 50%;
        transform: translateY(-50%);
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #FFF;
        cursor: pointer;
    }

    & > div:hover img {
        filter: brightness(0) saturate(100%) invert(60%) sepia(21%) saturate(5756%) hue-rotate(347deg) brightness(101%) contrast(101%);        
        transition: all 0.2s;
    }

`

const MainImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

const ArrowLeftContainer = styled.div`
    left: -28px;
`

const ArrowRightContainer = styled.div`
    right: -28px;
`

const SubImageContainer = styled.div`
    width: 100%;
    padding-inline: 52px;
    display: flex;
    justify-content: space-between;

`

const SubImage = styled.div`
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 10px;
    background-image: url(${props => props.path});
    background-size: contain;
    cursor: pointer;


    &:hover {
        background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${props => props.path});
    }
`

const SubImageActive = styled.div`
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 10px;
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${props => props.path});
    border: 2px solid #FF7E1B;
    background-size: contain;
    cursor: pointer;
`

const DataImages = [{name : "image-product-1", path : "./assets/image-product-1.jpg"},
                    {name : "image-product-2", path : "./assets/image-product-2.jpg"},
                    {name : "image-product-3", path : "./assets/image-product-3.jpg"},
                    {name : "image-product-4", path : "./assets/image-product-4.jpg"},
                ];

const ModalGallery = () => {

    const imageSelected = Store((state) => state.imageSelected);
    const setShowModalGalleryToggle = StoreAnnexe((state) => state.setShowModalGalleryToggle);


    const [imageControlerPosition, setImageControlerPosition] = useState(imageSelected);


    if(imageControlerPosition >= 5){
        setImageControlerPosition(1)
    }else if(imageControlerPosition <= 0) {
        setImageControlerPosition(4)
    }

    const NextImageHandler = () => {
        if(imageControlerPosition < 5 ) {
            setImageControlerPosition(+imageControlerPosition + 1)
        }
    }

    const PrevImageHandler = () => {
        if(imageControlerPosition <= 4 && imageControlerPosition > 0) {
            setImageControlerPosition(+imageControlerPosition - 1)   
        }
    }

    const toggle = (index) => {
        if(index === imageControlerPosition + 1 ) {
            setImageControlerPosition(imageControlerPosition)
        }
    }

    

    const DataImagesDisplay = DataImages.map((data, index) =>  imageControlerPosition - 1 === index ?      (
                                                                    <SubImageActive key = {data+index} 
                                                                                  path = {data.path} 
                                                                                  title = {data.name} 
                                                                                  onClick={() => {
                                                                                                    setImageControlerPosition(index + 1);
                                                                                                    toggle(index);}}></SubImageActive>) 
                                                                                    : 
                                                                                    (<SubImage key = {data+index} 
                                                                                    path = {data.path} 
                                                                                    title = {data.name} 
                                                                                    onClick={() => {
                                                                                                      setImageControlerPosition(index + 1);
                                                                                                      toggle(index);}}></SubImage>)) 
    return (
        <ModalGalleryStyle>

            <Container>
                <IMGCloseModal src="./assets/icon-close.svg" alt="Close Modal" onClick={setShowModalGalleryToggle} />
                    <MainImageContainer>
                        <ArrowLeftContainer onClick={PrevImageHandler}>  <img src="./assets/icon-previous.svg" alt="Arrow Left"/>  </ArrowLeftContainer>
                        <ArrowRightContainer onClick={NextImageHandler}> <img src="./assets/icon-next.svg" alt="Arrow Right"/>    </ArrowRightContainer>
                        <MainImage src= {`./assets/image-product-${imageControlerPosition}.jpg`} alt= {`Image-product-${imageControlerPosition}`}/>
                    </MainImageContainer>

                <SubImageContainer>
                    {
                        DataImagesDisplay
                    }
                </SubImageContainer>
            </Container>
        </ModalGalleryStyle>
    );
}

export default ModalGallery;
