"use client";
import React from "react";
import { motion } from "framer-motion";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  function submitForm(formData: Inputs) {
    window.location.href = `mailto:awaixkhan3@gmail.com?subject={${formData.subject}}&body=${formData.message}...From:${formData.name}(Sent from:${formData.email})`;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative text-center mx-auto items-center px-10 justify-evenly"
    >
      <h3 className="absolute top-16 lg:top-8 tracking-[20px] text-gray-500 uppercase text-xl">
        Contact
      </h3>
      <div className="space-y-6">
        <h4 className="text-4xl text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>
        <div className="w-full space-y-3">
          <div className="flex justify-center items-center space-x-3">
            <PhoneIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]/50" />
            <p className="text-lg">+92 306 5396548</p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <EnvelopeIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]/50" />
            <p className="text-lg">info@awaisyousaf.com</p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <MapPinIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]/50" />
            <p className="text-lg">Lane 1 Takbeer Colony, Attock.</p>
          </div>
        </div>
        <form
          className="flex flex-col w-fit mx-auto space-y-2"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="space-y-2 space-x-0 flex flex-col items-center lg:flex-row lg:space-x-2 lg:space-y-0">
            <input
              type="text"
              placeholder="Name"
              className="inputField"
              {...register("name")}
            />
            <input
              type="text"
              placeholder="Email"
              className="inputField"
              {...register("email")}
            />
          </div>
          <input
            type="text"
            className="inputField"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="inputField"
            placeholder="Message"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 transition-all py-3 px-10 text-black text-lg font-bold rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
