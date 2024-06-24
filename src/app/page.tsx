"use client";
import Image from "next/image";
import Header from "./components/header";
import FirstSection from "./components/FirstSection";
import ListDevice from "./components/ListDevice";
import InfoSpeakers from "./components/InfoSpeakers";
import SeeProduct from "./components/SeeProduct";
import Ecouteur from "./components/Ecouteur";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (


    <main className="flex flex-col  ">
      <Header />
      <FirstSection />
      <ListDevice />
      <InfoSpeakers />
      <SeeProduct />
      <Ecouteur />
      <About />
      <Footer />

    </main>
    
  );
}
