import styled from "styled-components";
import Store from "../hooks/Store.js"


const QuantityToOrderStyle = styled.div`
    display: flex;

    @media (min-width = 375px) and (max-width = 1439px) {
       flex-wrap: wrap;
    }

    & > * {
        width: 52px;
        height: 56px;
        background-color: #F6F8FD;
        border-radius: 10px;
        border: none;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;


        @media (min-width = 375px) and (max-width = 1439px) {
            flex-grow: 1;
        }
    }
`

const ButtonMinus = styled.button`
    background-image: url(./assets/icon-minus.svg);
`

const ButtonPlus = styled.button`
    background-image: url(./assets/icon-plus.svg);
`

const ButtonCart = styled.button`
    width:  276px;
    height: 56px;
    color: #FFF;
    background: url(./assets/icon-cart-cta.svg);
    background-position: 70px;
    background-size: 6%;
    background-repeat: no-repeat;
    background-color: #FF7E1B ;
    box-shadow: 0px 20px 50px -20px #FF7E1B;
    margin-left: 16px;
    transition: background-color 0.5s;

    @media (min-width = 375px) and (max-width = 1439px) {
        flex-basis: 100%;
        background-position: 30%;
        background-size: 17px;
        margin-top: 16px;
        margin-left: 0;
    }

    &:hover {
        background-color: #FFAB6A;
        transition: all 0.2s;
    }
`

const Quantity = styled.p`
    display: flex;
    color: #1D2026;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-left: -10px;
    margin-right: -10px;
`

const QuantityToOrder = () => {

    const quantity = Store((state) => state.quantity);
    const UpdateQuantity = Store((state) => state.UpdateQuantity);
    const setQuantityIncrease = Store((state) => state.setQuantityIncrease);
    const setQuantityDecrease = Store((state) => state.setQuantityDecrease);
    const reinitializeQuantity = Store((state) => state.reinitializeQuantity)
    const AddItemToCart= Store((state) => state.AddItemToCart);
    const listOfItem = Store((state) => state.listOfItem);

    const addItemHandler = () => {
        const isOnArray = listOfItem.some(el => el.name === "Fall Limited Edition Sneakers");

        if (quantity === 0) return
        reinitializeQuantity();

        if(isOnArray) {
         let currentIndex = null;
         listOfItem.forEach((item, index) => item.name === "Fall Limited Edition Sneakers" ? currentIndex = index : null)   
         listOfItem[currentIndex].quantity = quantity;
         reinitializeQuantity();
        }else {
            return (
                AddItemToCart({
                                image : "image-product-1.jpg",
                                name : "Fall Limited Edition Sneakers",
                                price : 125.00,
                                quantity : quantity}))
        }     
    }


    return (
        <QuantityToOrderStyle>
            <ButtonMinus onClick={setQuantityDecrease} />
            <Quantity>{quantity}</Quantity>
            <ButtonPlus onClick={setQuantityIncrease} />      
            <ButtonCart onClick={addItemHandler}> Add to cart </ButtonCart>
        </QuantityToOrderStyle>
    );
}

export default QuantityToOrder;
