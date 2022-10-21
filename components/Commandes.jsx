import styled from "styled-components";
import ItemsOrdered from "./ItemsOrdered";
import Store from "../hooks/Store";
import Link from "next/link";


const CommandeStyle = styled.div`
    z-index: 100;
    width: 360px;
    position: absolute;
    right: 6.2%;
    top: 94px;
    background: #FFFFFF;
    box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
    border-radius: 10px;
    display: flex;
    flex-direction: column;


    @media (min-width = 375px) and (max-width = 1439px) {
        width: 95.5%;
        right: 2.2%;
        top: 76px;
    }
`
const P = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #1D2026;
    padding: 24px 0 24px 24px;
    border-bottom: 1px solid #E4E9F2;
`
const EmptyMessage = styled.p`
    color: #69707D;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
    text-align: center;
    padding-top: 77px;
    padding-bottom: 85px;
`
const CheckoutButton = styled.a`
    background-color: #FF7E1B;
    color: #FFF;
    padding: 18px 123px 18px 123px;
    border-radius: 10px;
    cursor: pointer;
    margin: 24px auto 32px;

    &:hover {
        background-color: #FFAB6A;
        transition: all 0.2s;
    }
`

const Commandes = () => {
    const showCart = Store((state) => state.showCart);
    const setShowCartClose = Store((state) => state.setShowCartClose);
    const listOfItem = Store((state) => state.listOfItem);

  
    const displayListOfItemOrdered = listOfItem.map((list, index) => (
                        <ItemsOrdered  
                            key = {list.name+""+index}
                            image = {list.image}
                            name = {list.name}
                            unitPrice = {list.price}
                            quantity = {list.quantity}
                            index = {index}
                        />))
    return (
        <>
            { showCart ? (  
                            <CommandeStyle onMouseLeave={setShowCartClose}>
                            <P>Cart</P>
                                    {
                                        listOfItem.length !== 0  ? <>
                                                         { displayListOfItemOrdered } 
                                                         <Link href="/#"><CheckoutButton>Checkout</CheckoutButton></Link>
                                                    </> 
                                                    : (<EmptyMessage>Your cart is empty.</EmptyMessage>)
                                    }
                                </CommandeStyle>
                            )
                        : null
                    }
        </>);
}

export default Commandes;
