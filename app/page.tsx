"use client"
import MainContent from "@/components/MainContent";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(0);
  useEffect(() => {
    setIsDesktop(window.innerWidth)
  }, []);

  return (
   <>
    <MainContent />
    {
      (isDesktop >=1600)? 
        <Spline className="h-2" scene="https://prod.spline.design/lsjnayOXzDK5gyEj/scene.splinecode" />
      : null
    }
   </>
  );
}
