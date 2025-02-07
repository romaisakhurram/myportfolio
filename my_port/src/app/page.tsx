"use client"

import Projects from "@/app/components/Project";
import Hero from "./components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import AOS from "aos"
import "aos/dist/aos.css";
import {useEffect} from "react"

export default function Home() {
    useEffect (()=> {
    AOS.init ({
      easing: "ease-out-back" ,
      duration : 1200,
      delay: 100,
      mirror: true ,
      anchorPlacement :"bottom-bottom" ,
      offset : 160 ,
    })
    AOS.refresh();
    } ,[] )

  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}