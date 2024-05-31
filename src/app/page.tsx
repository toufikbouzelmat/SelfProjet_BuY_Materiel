import Image from "next/image";
import Header from "./components/header";
import FirstSection from "./components/FirstSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col    ">
      <Header />
      <FirstSection />
    </main>
  );
}
