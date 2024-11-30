"use client"

import AOS from "aos"
import "aos/dist/aos.css";
import {useEffect} from "react"
import Hero from "./components/Hero";
import AboutPage from "./About/page";
import ProjectPage from "./Projects/page";
import ContactPage from "./Contact/page";


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
    <div>
      <Hero/>
      <AboutPage/>
      <ContactPage/>
      <ProjectPage/>
    </div>
  );
}