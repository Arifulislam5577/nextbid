import React from "react";

const Blog = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Our Blogs
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Our Recent News
              </h2>
              <p className="text-body-color text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-5 max-w-[370px]">
              <div className="mb-2 overflow-hidden rounded">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-orange-600 mb-1 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-gray-100">
                  Dec 22, 2023
                </span>
                <h3>
                  <a
                    href="/"
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Meet AutoManage, the best AI management tools
                  </a>
                </h3>
                <p className="text-body-color text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-5 max-w-[370px]">
              <div className="mb-2 overflow-hidden rounded">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-orange-600 mb-1 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-gray-100">
                  Mar 15, 2023
                </span>
                <h3>
                  <a
                    href="/"
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    How to earn more money as a wellness coach
                  </a>
                </h3>
                <p className="text-body-color text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-5 max-w-[370px]">
              <div className="mb-2 overflow-hidden rounded">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-orange-600 mb-1 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-gray-100">
                  Jan 05, 2023
                </span>
                <h3>
                  <a
                    href="/"
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    The no-fuss guide to upselling and cross selling
                  </a>
                </h3>
                <p className="text-body-color text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
