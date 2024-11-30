import Image from "next/image";
import banner from "../../public/images/hero/hero-img.jpg";
import { FiArrowRight } from "react-icons/fi";
import Mainbutton from "./Mainbutton";

export default function Banner() {
  return (
    <div className="relative h-[100vh] w-full bg-black">
      {/* Banner Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src={banner} 
          alt="Banner Image" 
          layout="fill" 
          objectFit="cover" 
          className="object-cover w-full h-full" 
        />
      </div>

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-5 px-5 md:px-20">
        <p className="text-4xl md:text-6xl font-bold">MAKE YOUR BODY</p>
        <p className="text-xl md:text-3xl text-slate-300">FIT & PERFECT</p>
        <Mainbutton text={"Our Classes"} icon={<FiArrowRight className="text-3xl" />} />
      </div>
    </div>
  );
}
