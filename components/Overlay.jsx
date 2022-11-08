import styled from "styled-components";
import Link from "next/link";
import Store from "../hooks/Store";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";


const OverlayStyle = styled(motion.div)`
    display: none;
    z-index: 200;
    
    @media (min-width : 375px) and (max-width : 1439px) {
        display: block;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.75);
    }
`

const Menu = styled.div`
    width: 66.7%;
    height: 100%;
    background-color: #FFF;
    padding: 24px 0 0 25px;
`

const NAV = styled.nav`

`

const UL = styled(motion.ul)`
    display: flex;
    flex-direction: column;
`

const LI = styled(motion.li)`
    list-style: none;
    margin-bottom: 20px;
`

const A = styled(motion.a)`
    color: #1D2026;
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
`

const IMG = styled.img`
    margin-bottom: 54px;
    cursor: pointer;
`

const OverlayStyleVariants = {
    hidden : {opacity : 0, x : "-100%"},
    visible : {opacity : 1, x : 0,  transition : {duration : 0.3}},
    exit :  {opacity : 0, x : "-100%", transition : { delay : 0.5}}
}

const item = {
    visible: { opacity: 0.8, x: 0 },
    hidden: { opacity: 0, x: -100 },
}
  
const list = {
    visible: {
      opacity: 1,
    hidden: {
      opacity: 0,
    },
  }
}
  
const navList = ["Collection", "Men", "Women", "About", "Contact"]

const Overlay = () => {
    const CloseMenuModal = Store((state) => state.CloseMenuModal);
    const IsMenuModalOpen = Store((state) => state.MenuModal)

    return (
        <AnimatePresence> 
            {
                IsMenuModalOpen && (
                    <OverlayStyle
                    variants={OverlayStyleVariants}
                        initial = "hidden"
                        animate = "visible"
                        exit = "exit">
                <Menu>
                  <IMG src="./assets/icon-close.svg" 
                       alt="close the modal" 
                       onClick={CloseMenuModal}/>
                  <NAV>
                    <UL variants = {list}
                        initial = 'hidden'
                        animate = 'visible'>
                        
                        {
                            navList.map((list, id) => (
                                                        <LI 
                                                            key={id}
                                                            variants = {item}
                                                            initial = 'hidden'
                                                            animate = 'visible'
                                                            transition = {{delay : id * 0.2}}>
                                                        <Link href="/#"><A>{list}</A></Link></LI>   
                                        )    
                                )
                        }
                    </UL>
                  </NAV>            
                </Menu>
            </OverlayStyle>)
            }
        </AnimatePresence> 
    );
}

export default Overlay;
