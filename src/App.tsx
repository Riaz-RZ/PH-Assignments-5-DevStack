import { Suspense } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies";
import type { Itechnology } from "./types/TechnologyType";

 
const technologiesPromise = async(): Promise<Itechnology[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}
function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Suspense fallback={<h2>Data is Loading...</h2>}>
        <Technologies technologiesPromise = {technologiesPromise()}/>
      </Suspense>
      
      <Footer/>
    </>
  )
}

export default App
