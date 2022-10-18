import Head from "next/dist/shared/lib/head";
import Main from "../components/Main";

const Index = () => {
  return (
    <>  
      <Head> 
        <title>ECommerce Product Page</title>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Main />

    </>
  );
}

export default Index;
