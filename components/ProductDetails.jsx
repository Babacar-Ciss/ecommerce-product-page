import styled from "styled-components";
import QuantityToOrder from "./QuantityToOrder";

const ProductDetailsStyle = styled.div`
    width: 445px;
    display: flex;
    flex-direction: column;
    padding-top: 60px;

    @media (min-width = 375px) and (max-width = 1439px) {
       width: 100%;
       padding-inline: 24px;
       padding-top: 0;
    }
`

const BrandTitle = styled.p`
    color: #FF7E1B;
    font-size: 13px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;

    @media (min-width = 375px) and (max-width = 1439px) {
       font-size: 12px;
       line-height: 15px;
       margin-bottom: 16px;
       letter-spacing: 1.84615px;
    }

`

const ProductName = styled.h1`
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    color: #1D2026;
    margin-bottom: 32px;

    @media (min-width = 375px) and (max-width = 1439px) {
       font-size: 28px;
       line-height: 32px;
       margin-bottom: 15px;
    }
`
const Details = styled.p`
    color: #69707D;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    margin-bottom: 32px;

    @media (min-width = 375px) and (max-width = 1439px) {
       font-size: 15px;
       line-height: 25px;
       margin-bottom: 28px;
    }
`
const PriceAndDiscountContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 32px;

    @media (min-width = 375px) and (max-width = 1439px) {
       flex-wrap: nowrap;
       align-items: center;
    }
`

const Price = styled.p`
    color: #1D2026;
    font-size: 28px;
    font-weight: 700;
    line-height: 35px;
    margin-right: 23px;
`

const Discount = styled.p`
    color: #FF7E1B;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    background: #FFEEE2;
    align-self: flex-start;
    border-radius: 6px;
    padding: 4px 10px 0px 10px;
`

const PriceWithNoDiscount = styled.p`
    color: #B6BCC8;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
    text-decoration-line: line-through;
    flex-basis: 100%;

    @media (min-width = 375px) and (max-width = 1439px) {
       text-align: right;
    }
`


const ProductDetails = () => {
    return (
        <ProductDetailsStyle>
            <BrandTitle>sneaker company</BrandTitle>
            <ProductName>Fall Limited Edition Sneakers</ProductName>
            <Details>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</Details>
            <PriceAndDiscountContainer>
                <Price>$125.00</Price>
                <Discount>50%</Discount>
                <PriceWithNoDiscount>$250.00</PriceWithNoDiscount>
            </PriceAndDiscountContainer>
            <QuantityToOrder />

        </ProductDetailsStyle>
    );
}

export default ProductDetails;
