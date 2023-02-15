import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

const Testimonial = () => {
  const users = [
    {
      name: "Jakir Khan",
      img: "11",
      country: "England",
      review:
        "I just won an auction for a rare collectible on NextBid. The process was seamless, customer service was top-notch.",
    },
    {
      name: "Naimur Rahman",
      img: "12",
      country: "Bangladesh",
      review:
        "I was able to snag a great deal on a designer handbag on NextBid. The auction was intense but I came out victorious.",
    },
    {
      name: "Gr. Nancon William",
      img: "13",
      country: "Australia",
      review:
        "Highly recommend this platform for buying and selling. I will definitely be using this site again for future purchases.",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 ">
        <span className="text-primary mb-1 text-slate-900 block text-lg font-semibold">
          What our client says
        </span>
        <h1 className="text-3xl font-bold text-black sm:text-4xl md:text-[40px]">
          Our Auction{" "}
          <div className="relative inline-flex">
            <h1 className="relative text-3xl font-bold bg-gradient-to-r from-slate-900 to-orange-600 text-transparent bg-clip-text sm:text-4xl md:text-[40px] ">
              Winner
            </h1>
          </div>
        </h1>
        <p className=" text-base text-gray-900  max-w-xl mt-5 mb-10">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <TestimonialCard user={users[0]} />
          <TestimonialCard user={users[1]} />
          <TestimonialCard user={users[2]} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
