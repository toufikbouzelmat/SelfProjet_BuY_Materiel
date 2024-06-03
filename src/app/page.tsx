import Image from "next/image";
import Header from "./components/header";
import FirstSection from "./components/FirstSection";
import ListDevice from "./components/ListDevice";
import InfoSpeakers from "./components/InfoSpeakers";
import SeeProduct from "./components/SeeProduct";

export default function Home() {
  return (
    <main className="flex flex-col  ">
      <Header />
      <FirstSection />
      <ListDevice />
      <InfoSpeakers />
      <SeeProduct />
      <div className="w-16 h-16"></div>
    </main>
  );
}
