import Image from "next/image";
import { useEffect, useState } from 'react';
import { Navbar } from "./Navbar";


export default function Header() {

  return (
    <section className="relative">
        <section className=" h-[95%]">
            <Image src="/1x/''Fichier 6.png" width={1000} height={1000} alt="Banner Image" className="absolute w-full object-cover inset-0 z-[-1]"/>
        </section>

        <Navbar></Navbar>
    </section>
  );
}
