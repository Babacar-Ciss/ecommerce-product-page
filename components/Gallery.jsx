import styled from "styled-components";
import Store from "../hooks/store";
import { useState } from "react";
import StoreAnnexe from "../hooks/StoreAnnexe";


const GalleryStyle = styled.div`
    width: 445px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (375px <= width <= 1439px) {
        display: none;
    }
`

const MainImage = styled.img`
    width: 445px;
    height: 445px;
    border-radius: 15px;
    margin-bottom: 32px;
    cursor: pointer;
`

const SubImageContainer = styled.div`
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

const SubImageContainerActive = styled.div`
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
                ] 

const Gallery = () => {

    const imageSelected = Store((state) => state.imageSelected);
    const setImageSelected = Store((state) => state.setImageSelected);
    const setShowModalGalleryToggle = StoreAnnexe((state) => state.setShowModalGalleryToggle);
    
    const [activeImage, setActiveImage] = useState(0)
    
    const toggle = (index) => {
        if(index === activeImage) {
            setActiveImage(null)
        }else{  
            setActiveImage(index)
        }
    }

    
    
    const DataImagesDisplay = DataImages.map((data, index) =>  activeImage === index ?      (
                                                                    <SubImageContainerActive key = {data+index} 
                                                                                  path = {data.path} 
                                                                                  title = {data.name} 
                                                                                  onClick={() => {
                                                                                                    setImageSelected(index + 1);
                                                                                                    toggle(index);}}></SubImageContainerActive>) 
                                                                                    : 
                                                                                    (<SubImageContainer key = {data+index} 
                                                                                    path = {data.path} 
                                                                                    title = {data.name} 
                                                                                    onClick={() => {
                                                                                                      setImageSelected(index + 1);
                                                                                                      toggle(index);}}></SubImageContainer>)) 

    return (
        <GalleryStyle>
            <MainImage src={`./assets/image-product-${imageSelected}.jpg`} alt= {`image-product-${imageSelected}`} onClick={setShowModalGalleryToggle} />
            { DataImagesDisplay }            
        </GalleryStyle>
    );
}

export default Gallery;
