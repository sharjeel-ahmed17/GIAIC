import Link from "next/link";
import React from "react";
// FooterData.ts
const footerData = [
  {
    heading: "Company",
    subHeadings: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    heading: "Support",
    subHeadings: ["Contact Us", "FAQs", "Live Chat"],
  },
  {
    heading: "Legal",
    subHeadings: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
  {
    heading: "Legal",
    subHeadings: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const Footer = () => {
  return (
    <div className="mt-5 mx-auto ">
      <Footer1 />
      {/* footer button */}
      <div className="flex justify-center py-2 bg-[rgb(55,71,90)]">
        <button className="text-white">Back to top</button>
      </div>

      <Footer2 />
      <Footer3 />
    
    </div>
  );
};

export default Footer;

function Footer1() {
  return (
    <div className="  items-center bg-white  p-8">
      <div className="flex flex-col justify-center text-center items-center border-t-2 border-b-2 border-black border-solid">
        <h2 className="text-[30px] font-bold">
          See personalized recommendations{" "}
        </h2>
        <button className="bg-yellow-500 p-[8px_24px] rounded-md mt-2">
          sign in
        </button>
        <p>New customer? Start here.</p>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-100">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.subHeadings.map((subHeading, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-gray-400 hover:text-gray-200 cursor-pointer"
                  >
                    {subHeading}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* tstimonial images */}
        {/* <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex md:flex-row flex-col md:justify-between items-center">
            <div>
              <img src="" alt="logo" />
            </div>
            <div className="flex gap-2 flex-col md:flex-row">
              <img src="" alt="logo 2" />
              <img src="" alt="logo 3" />
              <img src="" alt="logo 4" />
            </div>
          </div>
        </div> */}
        
      </div>
    </div>
  );
}


function Footer3(){
  return(
    <div className=" bg-[rgb(55,71,90)]">
    <footer className="max-w-2xl mx-auto text-white">
      <div className="flex gap-2 justify-center">
        <Link href={'/'}>Customers</Link>
        <Link href={'/'}>Products</Link>
        <Link href={'/'}>Privacy</Link>
        <Link href={'/'}>Advertising</Link>
      </div>
      <p className="text-center">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
    </footer>

    </div>
  )
}