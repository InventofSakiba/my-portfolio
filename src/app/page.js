import Image from "next/image";
import Specialties from "./Components/Specialties/Specialties";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";

export default function Home() {
  return (
    <div>
      <Specialties></Specialties>
      <About></About>
      <Project></Project>
    </div>
  );
}
