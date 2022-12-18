import React from "react";
import { motion } from "framer-motion";
import { PageInfoSanity } from "../types/sanity";
import { useForm } from "react-hook-form";

type Props = { pageInfo: PageInfoSanity };
type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<FormInputs>();

  const submitForm = async (data: FormInputs) => {
    try {
      window.location.href = `mailto:harryalpha@hotmail.co.uk?subject=${data.subject}&body=${data.message} \n${data.email}`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <form className="absolute w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
        <div className="flex">
          <h1 className="font-bold uppercase text-5xl">Contact Me</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            {...register("firstName")}
            placeholder="First Name*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            {...register("lastName")}
            placeholder="Last Name*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            {...register("email")}
            placeholder="Email*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            {...register("subject")}
            placeholder="Subject*"
          />
        </div>
        <div className="my-4">
          <textarea
            {...register("message")}
            placeholder="Message*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="w-full flex flex-col space-y-4 md:flex-row justify-between">
          <button
            type="submit"
            onClick={handleSubmit(submitForm)}
            className="w-full md:w-52 self-end uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg 
                      focus:outline-none focus:shadow-outline"
          >
            <a>Contact Me</a>
          </button>
          <a
            href={pageInfo.resume}
            className="cursor-pointer w-full md:w-52 self-end uppercase text-sm font-bold tracking-wide bg-gray-50 text-blue-900 p-3 rounded-lg text-center focus:outline-none focus:shadow-outline"
          >
            <span>View Resume</span>
          </a>
        </div>
      </form>
    </motion.div>
  );
}
