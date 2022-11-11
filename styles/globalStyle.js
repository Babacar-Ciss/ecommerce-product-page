import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --dark-cyan : #0E8784;
        --dark-grey-blue : #333d4b;
        --pale-orange : #fdd6ba;
        --light-cream : #fefc7;
        --grey : #83888F;
        --bg-color : #FEFCF7;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fraunces', 'Barlow', sans-serif , serif;
    }
`
