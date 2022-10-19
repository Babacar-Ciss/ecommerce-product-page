import styled from "styled-components";
import Store from "../hooks/Store";

const PanierStyle = styled.div`
    position: relative;
    margin-right: 0;
    margin-left: auto;
    cursor: pointer;
    padding-bottom: 45px;


    & svg path:hover {
        fill: #1D2026;
        transition: all 0.4s;
    }

    @media (375px <= width <= 1439px) {
        padding-bottom: 0;
        margin-left: auto;
        margin-bottom: -4px;
    }
`

const SPAN = styled.span`
    display: flex;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -4px;
    width: 19px;
    height: 13px;
    border-radius: 6.5px;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
    background-color: #FF7E1B;
`

const Panier = () => {
    const setShowCart = Store((state) => state.setShowCart);
    const listOfItem = Store((state) => state.listOfItem);

    const totalItems = listOfItem.reduce(((prev, curr) => prev + curr.quantity), 0)

    return (
        <PanierStyle>
            <svg onClick={setShowCart} width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>
            {
                totalItems !== 0 ? (<SPAN>{totalItems}</SPAN>) : null
            }
        </PanierStyle>
    );
}

export default Panier;