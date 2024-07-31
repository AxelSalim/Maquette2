import Head from "next/head";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Acceuil - BrainWave</title>
        <meta name="description" content="BrainWave" />
      </Head>


      <Header></Header>

      <Main></Main>

      <Footer></Footer>
      
    </>
  );
}
