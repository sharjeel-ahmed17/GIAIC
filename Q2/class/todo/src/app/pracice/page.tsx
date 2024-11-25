"use client";
import ConditionalRendering from "@/components/ConditionalRendering";
import TernaryOperator from "@/components/Elsjhdf";
import Faq from "@/components/Faq";
import Modal from "@/components/Modal";
import Number from "@/components/Number";
import Conrolled from "@/components/Conrolled";
import Create from "@/components/Create";
import Api from "@/components/Api";
import FlexBox from "@/components/dummy/FlexBox";

import ResponsiveMenu from "@/components/ResponsiveMenu";
import ResponsiveMenu2 from "@/components/ResponsiveMenu2";
import ShowAndHide from "@/components/ShowAndHide";
import './index.css'
import Str from "@/components/Str";
import Tabs from "@/components/Tabs";

const Practice = () => {
  return (
    // <h1>this</h1>
    <div>
      <FlexBox />
      {/* <Api /> */}
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tenetur?</h1>
      {/* <Tabs /> */}
      {/* <Conrolled /> */}
      {/* <Create /> */}
      {/* <h1 className="hero-text">Hi, I am John,
      Creative Technologist</h1> */}
      {/* <Number /> */}
      {/* <Str/> */}
      {/* <ConditionalRendering /> */}
      {/* <Render /> */}
      {/* <TernaryOperator /> */}
      {/* <ShowAndHide/> */}
      {/* <ResponsiveMenu2 />< */}
      {/* <Modal /> */}
      {/* <Faq /> */}
      {/* <div className="grid grid-col-1 md:grid-cols-2  lg:grid-cols-4 gap-4 px-1 md:px-4">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       
        
      </div> */}
      {/* <div className="flex flex-col md:flex-row gap-4 md:flex-wrap">
        <div className="bg-red-300 p-5 w-full ">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
            alt=""
          />
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            incidunt.
          </p>
        </div>
        <div className="bg-red-300 p-5 w-full md:w-1/2">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
            alt=""
          />
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            incidunt.
          </p>
        </div>
        <div className="bg-red-300 p-5 w-full md:w-1/2">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
            alt=""
          />
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            incidunt.
          </p>
        </div>
        
      </div> */}


      {/* flex box */}
      {/* <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div className="p-5 bg-red-600 w-full lg:w-1/3">
            <img
              className="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
              alt=""
            />
          </div>
          <div className="p-5 bg-green-600 w-full md:w-1/2 lg:w-1/3"> <img
              className="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
              alt=""
            /></div>
          <div className="p-5 bg-blue-600 w-full md:w-1/2 lg:w-1/3"> <img
              className="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
              alt=""
            /></div>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-[40%_auto] gap-3">
        <div className="p-5 bg-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio dolorem numquam aut quo beatae corrupti, dolor totam natus a consequatur at officia! Distinctio tempora alias dolorum a consectetur dicta!</div>
        <div className="p-5 bg-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio dolorem numquam aut quo beatae corrupti, dolor totam natus a consequatur at officia! Distinctio tempora alias dolorum a consectetur dicta!</div>
      </div> */}
    </div>
  );
};

export default Practice;

const Card = () => {
  return (
    <div className="bg-red-300 p-5">
      <img
        className="w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
        alt=""
      />
      <h2>Lorem, ipsum dolor.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        incidunt.
      </p>
    </div>
  );
};
