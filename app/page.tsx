"use client"
import MainContent from "@/components/MainContent";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <MainContent />
    <Spline className="h-2" scene="https://prod.spline.design/lsjnayOXzDK5gyEj/scene.splinecode" />
   </>
  );
}
