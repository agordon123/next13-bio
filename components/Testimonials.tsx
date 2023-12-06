'use client';
import React from "react";
import SectionHeader from "./SectionHeader";
import { useSectionInView } from "@/lib/hooks";
import { testimonials } from "@/lib/data";
import Testimonial from "./Testimonial";
import Image from "next/image";
const Testimonials = () => {

  return (
    <section id="testimonials" className="scroll-mt-28 mb-28">
      <SectionHeader>Testimonials and Certifications</SectionHeader>
      <Image src="/cert.png" width={600} height={400} alt="certs" className="mt-10 mb-10" />
      <div>
        {testimonials.map((test) => (
          <React.Fragment key={test.name}>
            <Testimonial
              {...test}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
