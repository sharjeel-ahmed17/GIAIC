import Hero from "@/components/home/hero/Hero";

import FeaturedCourses from "@/components/home/featured_courses/FeaturedCourses";
import Testimonial from "@/components/home/testimonial/Testimonial";


export default function Home() {
  return (
    <main>
 
      <Hero />
      <FeaturedCourses/>
      <Testimonial />

    </main>
  );
}
