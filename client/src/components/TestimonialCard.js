import React from "react";

const TestimonialCard = ({ user }) => {
  return (
    <div className="p-4 relative ">
      <div className=" absolute bottom-0 right-0 w-20 h-20 rounded-full bg-orange-100"></div>
      <div className="h-full bg-white p-8 rounded-lg relative shadow-2xl">
        <p className="leading-relaxed mb-6 text-gray-700 text-sm first-letter:font-bold first-letter:text-xl first-letter:text-orange-600">
          {user.review}
        </p>
        <a className="inline-flex items-center" href="/">
          <img
            alt="testimonial"
            src={`https://randomuser.me/api/portraits/men/${user.img}.jpg`}
            className="w-12 h-12 border-2 border-white shadow-md rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-bold font-serif text-gray-900">
              {user.name}
            </span>
            <span className="text-gray-500 text-sm">{user.country}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
