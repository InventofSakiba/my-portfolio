import Image from "next/image";
import Specialties from "./Components/Specialties/Specialties";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Specialties></Specialties>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}
