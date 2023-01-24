import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

const Testimonial = () => {
  const users = [
    {
      name: "Jakir Khan",
      img: "11",
      country: "England",
      review:
        "I just won an auction for a rare collectible on NextBid. The process was seamless and the customer service was top-notch. Highly recommend this platform for buying and selling.",
    },
    {
      name: "Naimur Rahman",
      img: "12",
      country: "Bangladesh",
      review:
        "I was able to snag a great deal on a designer handbag on NextBid. The auction was intense but I came out victorious. I will definitely be using this site again for future purchases.",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-3xl font-bold text-black sm:text-4xl md:text-[40px] text-center">
          Our Auction{" "}
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-0 border-b-[20px] border-orange-600"></span>
            <h1 className="relative text-3xl font-bold text-black sm:text-4xl md:text-[40px] ">
              Winner
            </h1>
          </div>
        </h1>
        <p className=" text-base text-gray-900 text-center max-w-xl mx-auto mb-10">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
        <div className="flex flex-wrap -m-4">
          <TestimonialCard user={users[0]} />
          <TestimonialCard user={users[1]} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
