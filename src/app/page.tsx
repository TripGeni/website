"use client";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInputfied";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative h-screen px-4 md:px-4 lg:px-10 xl:px-20 py-10 md:py-16 bg-[url('/bg-image.png')] bg-cover bg-center overflow-hidden">
      {/* Header */}
      <header>
        <div className="flex justify-between items-center">
          <Image
            src="/full-logo-white.svg"
            alt="TripGenie's logo"
            width={180}
            height={38}
            priority
            className="w-[140px] h-[25px] md:w-[250px] md:h-[40px] lg:w-[250px] lg:h-[40px] xl:w-[300px] xl:h-[46px]"
          />

          <div className="hidden md:block">
            <CustomButton
              label="Join the waitlist"
              ariaLabel="Join the waitlist"
              labelStyle="font-[600] text-white md:text-[12px] xl:text-[14px]"
              buttonStyle="md:w-auto w-full md:p-[2px] lg:p-[2.5px]"
            />
          </div>
        </div>
      </header>

      {/* Body */}
      <div>
        <div className="flex justify-center items-center mt-24 md:mt-20 lg:mt-10 xl:mt-16">
          <Image
            src="/full-logo-colored.svg"
            alt="TripGenie's logo colored"
            width={350}
            height={100}
            className="w-[250px] h-[65px] md:w-[300px] md:h-[58px] lg:w-[300px] lg:h-[68px] xl:w-[370px] xl:h-[94px]"
          />
        </div>
        <div>
          <h1 className="text-[24px] md:text-[35px] lg:text-[45px] xl:text-[60px] font-[900] text-transparent bg-clip-text bg-gradient-to-t from-[#737373] to-[#ffffff] text-center max-w-[1000px] mx-auto mt-10 leading-[1.3] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]">
            Unlock the magic of AI-powered travel planning
          </h1>

          <p className="text-gray-400 text-[11px] md xl:text-[14px] text-center max-w-[300px] md:max-w-[500px] xl:max-w-[700px] mx-auto mt-4 md:mt-4">
            Say farewell to traditional agents and let our intelligent AI craft
            your perfect trip to London, Paris, New York, and beyond—seamlessly
            covering every detail from transport, accommodation, to activities,
            ensuring a personalized, stress-free, and hassle-free journey.
          </p>
        </div>
      </div>

      {/* Email waitlist */}
      <div className="mt-10 md:mt-10 xl:mt-16 md:px-20 px-4 lg:px-[10em] xl:px-[12em]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 space-x-0">
          <CustomInput
            type="text"
            placeholder="Enter email"
            value={value}
            onChange={handleInputChange}
            inputStyle="bg-gray-700 text-white placeholder-gray-400 px-4 py-3 text-[13px] md:px-4 md:py-3 md:text-[12px] lg:px-4 lg:py-[11px] lg:text-[13px] xl:px-6 xl:py-[16px] xl:text-[16px]"
            wrapperStyle="flex-1 p-[1.8px] md:p-[2px] lg:p-[2.2px] xl:p-[2.5px]"
          />

          <CustomButton
            label="Get early access"
            ariaLabel="Get early access"
            labelStyle="font-[600] text-black !important text-[13px] md:text-[12px] lg:text-[13px] xl:text-[16px]"
            buttonStyle="md:w-auto w-full p-[1.8px] md:p-[2px] md:p-[2.2px] xl:p-[2.5px]"
            buttonColor="bg-white"
          />
        </div>
      </div>

      {/* Sticky Text at the Bottom */}
      <div className="absolute -bottom-[1em] md:-bottom-[6.1em] lg:-bottom-[9.1em] xl:-bottom-[11.1em] -left-[4em] md:-left-[8em] lg:-left-[12em] xl:-left-[2em] w-full text-center">
        {/* Gradient Overlay */}
        <div
          className="absolute w-full h-full left-[4em] md:left-[8em] lg:left-[12em] xl:left-[2em]"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
            zIndex: 1, 
          }}
        />

        {/* Text */}
        <h2
          className="text-[190px] md:text-[255px] lg:text-[305px] xl:text-[415px] font-black text-transparent relative z-0" 
          style={{
            WebkitTextStroke: "0px", 
            WebkitTextFillColor: "#121212", 
            color: "transparent", 
            opacity: 0.2,
            textShadow: `
              1px 1px 0 white, 
              -1px 1px 0 white, 
              1px -1px 0 white, 
              -1px -1px 0 white, 
              2px 2px 0 white, 
              -2px 2px 0 white, 
              2px -2px 0 white, 
              -2px -2px 0 white
            `,
            lineHeight: "1",
          }}
        >
          TripGenie
        </h2>
      </div>
    </div>
  );
}
