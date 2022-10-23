import styled from "styled-components";
import Store from "../hooks/Store";


const ItemsOrderedStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: stretch;
    padding-inline : 24px;
    padding-top: 24px;

    & p {
        font-size: 16px;
        line-height: 26px;
        color: #69707D;
        margin-right: 3px;
    }
`

const PictoImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 4px;
    margin-right: 16px;

`

const ProductNameAndTotalAmongContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TotalAmongContainer = styled.div`
    display: flex;
    justify-content: stretch;
    width: 70%;
`

const TotalAmount = styled.p`
    font-weight: 700;
    color: #1D2026 !important;
    margin-left: 10px;
`

const DeleteIcon = styled.img`
    cursor: pointer;
    margin-right: 0;
    margin-left: auto;
`

const ItemsOrdered = (props) => {

    const totalAmount  = props.unitPrice * props.quantity;
    const RemoveItemFromCart = Store((state) => state.RemoveItemFromCart);

    return (
        <ItemsOrderedStyle>
            <PictoImage src={`./assets/${props.image}`} alt="Product-1" />
            <ProductNameAndTotalAmongContainer>
                <p>{props.name}</p>
                <TotalAmongContainer>
                    <p>${props.unitPrice}</p>
                    <p>x</p>
                    <p>{props.quantity}</p>
                    <TotalAmount> ${totalAmount}</TotalAmount>
                </TotalAmongContainer>
            </ProductNameAndTotalAmongContainer>
            <DeleteIcon src="./assets/icon-delete.svg" alt="delete icon" onClick={() =>{
                                                                                        RemoveItemFromCart(props.index) 
                                                                                        } } />
        </ItemsOrderedStyle>
    );
}

export default ItemsOrdered;
