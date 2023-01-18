import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../redux/features/auth/authService";
import useRedirect from "../../hooks/useRedirect";
import { TbBrandNextjs } from "react-icons/tb";
import Doted from "../../components/Doted";
import SocialMedia from "../../components/SocialMedia";
import useTitle from "../../hooks/useTitle";
const Signin = () => {
  useTitle("SignIn");
  const redirect = useRedirect();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.authReducers);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(createNewUser(data));
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [redirect, user, navigate]);
  return (
    <motion.section
      initial={{ y: "5%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="w-full flex items-center justify-between lg:w-2/3 mx-auto  my-10">
        <div className="md:w-1/2 w-5/6 bg-white drop-shadow-lg py-10 mx-auto rounded relative">
          <h1 className=" text-2xl  text-center tracking-wider flex items-center justify-center">
            <TbBrandNextjs size={32} />
            ext<span className="text-orange-600">Bid</span>
          </h1>
          <Doted color="#EA580C" />
          <form
            className="lg:px-10 lg:py-5 p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {error && (
              <p className="p-3 rounded capitalize bg-orange-400 mb-4 text-white text-center">
                {error}
              </p>
            )}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 text-sm text-gray-600 block"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                className="w-full py-3  px-5 rounded focus:outline-none placeholder:text-sm placeholder:text-gray-400 bg-gray-200"
                placeholder="enter your name"
                {...register("name", { required: true, minLength: 4 })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 text-sm text-gray-600 block"
              >
                Eamil Address
              </label>

              <input
                id="email"
                type="email"
                className="w-full py-3  px-5 rounded focus:outline-none placeholder:text-sm placeholder:text-gray-400 bg-gray-200"
                placeholder="example@gmail.com"
                {...register("email", { required: true, minLength: 6 })}
              />
            </div>
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label
                  className="text-sm text-gray-600 block"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>

              <input
                type="password"
                className="w-full py-3  px-5 rounded focus:outline-none placeholder:text-sm placeholder:text-gray-400 bg-gray-200"
                placeholder="enter your password"
                {...register("password", { required: true })}
              />
            </div>
            {loading ? (
              <button className="w-full py-3 bg-orange-400 text-white rounded text-sm cursor-wait">
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full py-3 bg-orange-600 text-white rounded text-sm"
              >
                Signin
              </button>
            )}

            <div className="mt-2">
              <p className="text-sm text-gray-500 text-right">
                Already have an account?{" "}
                <Link
                  className="text-orange-500"
                  to={`/login?redirect=${redirect}`}
                >
                  Login
                </Link>
              </p>
            </div>
          </form>

          <div className="flex items-center px-10">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signin with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>

          <SocialMedia />
        </div>
      </div>
    </motion.section>
  );
};

export default Signin;
