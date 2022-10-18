import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )  
}

export default MyApp
