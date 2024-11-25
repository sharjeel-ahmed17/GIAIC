"use client";
import { CircleUserRound, House, Menu, NotebookTabs, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Inter, Poppins } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] });
const popins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export default function Home() {
  const [visible, setVisible] = useState(false);
  const navlist = [
    {
      label: "home",
      href: "#",
      icon: <House />,
    },
    {
      label: "about",
      href: "#",
      icon: <NotebookTabs />,
    },
    {
      label: "contact",
      href: "#",
      icon: <CircleUserRound />,
    },
  ];
  const cards = [
    {
      bgColor: "bg-red-400 md:w-full lg:w-1/3",
      title: "Introduction to Artificial Intelligence!",
      content:
        "Artificial Intelligence (AI) is the simulation of human intelligence by machines, enabling them to learn, reason, and perform tasks like decision-making and language understanding. Rapid advancements in computing and algorithms have integrated AI into industries such as healthcare, finance, and transportation, revolutionizing traditional methods.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdzuhiJ9sXUiqGe2z13E4oN4un94uRwAPAA&s",
    },
    {
      bgColor: "bg-blue-400 md:w-1/2 lg:w-1/3",
      title: "Applications and Impact",
      content:
        "AI is transforming sectors with applications like disease diagnosis in healthcare, fraud detection in finance, and autonomous vehicles in transportation. Tools like virtual assistants enhance daily life, but AI also raises ethical concerns about bias, privacy, and job displacement, requiring responsible regulation.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA4KWrabyPUuUMKoAFdSXQXuOZE0l2GBvSg&ss",
    },
    {
      bgColor: "bg-orange-400 md:w-1/2 lg:w-1/3",
      title: "The Future of AI",
      content:
        "AI’s future promises innovations in creativity, robotics, and problem-solving for global challenges like climate change. However, managing risks, ensuring accountability, and fostering ethical practices are essential to unlocking its full potential while safeguarding society.",
      imageUrl:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Future_Of_Artificial_Intelligence.jpg",
    },
  ];
  return (
    <div className="max-w-[1280px] mx-auto">
     
      {/* responsive menu navigation */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-black text-white">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">GIAIC</p>
          <button
            className="block md:hidden text-lg"
            onClick={() => setVisible(!visible)}
          >
            {visible ? <X /> : <Menu />}
          </button>
        </div>

        <nav className={`md:flex items-center ${visible ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:gap-4 mt-4 md:mt-0">
            {navlist.map((item, index) => (
              <NavItem item={item} key={index} />
            ))}
          </ul>
        </nav>
      </header>
      {/*  */}
      {/* layout design */}
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {/* <div className="bg-red-400 p-4 md:w-full lg:w-1/3">
    <h2 className="text-2xl font-bold text-white">Introduction to Artificial Intelligence!</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, eius!Artificial Intelligence (AI) is the simulation of human intelligence by machines, enabling them to learn, reason, and perform tasks like decision-making and language understanding. Rapid advancements in computing and algorithms have integrated AI into industries such as healthcare, finance, and transportation, revolutionizing traditional methods.</p>
  </div>
  <div className="bg-blue-400 p-4 md:w-1/2 lg:w-1/3">
    <h2>Introduction to Artificial Intelligence!</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, eius!Artificial Intelligence (AI) is the simulation of human intelligence by machines, enabling them to learn, reason, and perform tasks like decision-making and language understanding. Rapid advancements in computing and algorithms have integrated AI into industries such as healthcare, finance, and transportation, revolutionizing traditional methods.</p>
  </div>
  <div className="bg-orange-400 p-4 md:w-1/2 lg:w-1/3">
    <h2>Introduction to Artificial Intelligence!</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, eius!Artificial Intelligence (AI) is the simulation of human intelligence by machines, enabling them to learn, reason, and perform tasks like decision-making and language understanding. Rapid advancements in computing and algorithms have integrated AI into industries such as healthcare, finance, and transportation, revolutionizing traditional methods.</p>
  </div>
   */}

        {cards.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
// interface
interface INavitem {
  label: string;
  href: string;
  icon: React.ReactElement;
}
interface ICard {
  title: string;
  content: string;
  bgColor: string;
  imageUrl: string;
}

// components
const NavItem = ({ item }: { item: INavitem }) => {
  // console.log(item);

  return (
    <li className="font-medium text-lg px-4 py-2 hover:bg-white hover:text-black rounded-lg w-full md:w-auto">
      <Link href={item.href} className="flex gap-3 items-center uppercase">
        {item.icon}
        {item.label}{" "}
      </Link>
    </li>
  );
};

const Card = ({ item }: { item: ICard }) => {
  return (
    <div className={`p-4 ${item.bgColor} `}>
      <Image
        width={200}
        height={200}
        className="w-full h-[300px] mb-3 object-cover"
        src={item.imageUrl}
        alt=""
      />
      <h2 className={`{${popins.className}  text-2xl font-bold text-white mb-3`}>{item.title}</h2>
      
      <p className="text-xl font-medium ">{item.content}</p>
    </div>
  );
};
