"use client";

import Head from "next/head";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Acceuil - BrainWave</title>
        <meta name="description" content="BrainWave" />
      </Head>


      <section className="relative">
        <Image src="/1x/''Fichier 6.png" alt="Image background" layout="fill"  className="absolute object-cover inset-0 z-[-1]" />
        <Header></Header>
      </section>

      <section className="bg-white">
        <Main></Main>
      </section>

      <section className="bg-[#fdfcff] pt-20">
        <Footer></Footer>
      </section>
      
    </>
  );
}
