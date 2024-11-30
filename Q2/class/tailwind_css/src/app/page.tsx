import Card1 from "@/components/amazon/Card1";
import Card2 from "@/components/amazon/Card2";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import BigCard from "@/components/amazon/BigCard";
const Home = () => {
  return (
    <>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card1 />
        <Card2 />
        <Card2 />
        <Card1 />
        <Card1 />
        <Card2 />
        <Card2 />
        <Card1 />
      </div>
      {/* horizental cards */}
      <BigCard />
      <BigCard />
      <BigCard />

      {/* cards 2*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <Card2 />
        <Card2 />
        <Card1 />
        <Card2 />
      </div>
      <BigCard />
      <BigCard />

      {/* card 3 */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <Card2 />
        <Card1 />
        <Card1 />
        <Card2 />
      </div>
      <BigCard />
      <BigCard />
        {/* card 4 */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <Card2 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <BigCard />

      
    </>
  );
};

export default Home;

function ChildCard() {
  return (
    <li className="basis-[15%] p-1">
      <Image
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Holiday_Shovler/Fuji_HolidayGG_Shoveler_Holiday_deals_1X_EN._CB541659723_.jpg"
        alt="Image 1"
        width={400}
        height={200}
      />
    </li>
  );
}
