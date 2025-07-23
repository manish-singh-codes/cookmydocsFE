import HeroSection from "@/components/HeroSection/HeroSection";
import Resume from "@/components/Resume/Resume";
import Templates from "@/components/Templates/Templates";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Templates/>
      <Resume/>
    </>
  );
}