import React from "react";
import play from "../../assets/play-button.png";
import certificate from "../../assets/certification.jpg";
import { Button } from "@mui/material";
function Certificate() {
  return (
    <div className="w-10/12 mx-auto my-20 px-10">
      <h2 className="text-5xl text-center font-gil-bold">
      Our <span className="text-primary">Certification</span> Course
      </h2>
      <p className="text-paragraph mt-8 text-center">
      Our Certification Course is designed to equip individuals with the necessary 
        <br />
        skills and knowledge to excel in their chosen field.
      </p>
      <div className="flex justify-between items-center mt-10 gap-8">
        <div
          className="rounded-xl relative flex-1/2"
        >
          <img
            src={certificate}
            alt="person"
            className="w-[520px] h-[310px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <img  src={play}
            alt="play button" className="w-[50px]" />
          </div>
        </div>
        <div className="flex-1/2">
          <p className="text-pTag mb-6">
            <span className="font-gil-medium">Our Certification Course</span> is designed to equip individuals with the
            necessary skills and knowledge to excel in their chosen field. The
            course is comprehensive and covers a wide range of topics, from
            foundational concepts to advanced techniques.
          </p>
          <p className="text-pTag mb-6">The course is ideal for those looking to upskill, reskill, or transition into a new career. With our <span className="font-gil-medium">Certification Course</span>, you'll gain a competitive edge in the job market and open up new opportunities for personal and professional growth.  </p>
          <Button variant="contained" className="!rounded-full !p-3 !mt-8">Explore More</Button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
