import React, { useEffect, useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function Contact({}: Props) {
  const [windowAvailable, setWindowAvailable] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();

  useEffect(() => {
    setWindowAvailable(true);
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (windowAvailable) {
      window.location.href = `mailto:barry0719@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.%0D%0A${formData.message}%0D%0A(${formData.email})`;
    }
  };
    

  return (
<div className="relative justify-center items-center h-screen w-screen ">
  <div className="flex justify-center items-center pt-20 text-white">
    <h3 className="font-semibold text-3xl md:text-5xl uppercase tracking-[2px]  underline m-4">
      Contact
    </h3>
  </div>
    <p className=' text-lg md:hidden mx-auto w-[60%] text-white flex justify-center items-center font-poppins'>
    Have some big idea or brand to develop and need help? Then reach out{" "}
        {`we'd`} love to hear about your project and provide help
    </p>
    <div className='md:hidden'>
      <div className="flex flex-row  items-center justify-evenly gap-[20px] text-lg m-4">
        <div className="relative text-base italic">barry0719@gmail.com</div>
        <a
        href='https://github.com/PKFireBarry'
        className="relative [text-decoration:underline]">Github</a>
        <a href='https://www.linkedin.com/in/darion-george/' className="relative [text-decoration:underline]">Linkedin</a>

      </div>
    </div>
  <div className="mx-auto w-[85%] h-[85%] px-0 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-white md:flex-row">
    <div className=" hidden md:flex flex-col items-start justify-start gap-[20px] md:w-1/2 flex-wrap">
      <div className="relative  text-6xl">Let’s Talk</div>
      <div className="relative text-xl inline-block w-full p-4 font-poppins">
        Have some big idea or brand to develop and need help? Then reach out{" "}
        {`we'd`} love to hear about your project and provide help
      </div>
      <div className="flex flex-col items-start justify-start gap-[20px] text-13xl">
        <b className="relative font-bold text-3xl">Email</b>
        <div className="relative text-base italic">barry0719@gmail.com</div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[20px] text-base">
        <b className="relative text-13xl font-bold text-3xl">Socials</b>

        <a
        href='https://github.com/PKFireBarry'
        className="relative [text-decoration:underline]">Github</a>
        <a href='https://www.linkedin.com/in/darion-george/' className="relative [text-decoration:underline]">Linkedin</a>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-[15px] w-[95%] md:w-1/2  font-poppins bg-[#a2c7f1] rounded-xl border-[4px] border-solid border-black  shadow-[0px_0px_15px_rgba(0,_0,_0,_0.8)] p-4 text-black h-4/5">
      <div className="relative">Name</div>
      <input
        {...register("name")}
        className="py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base md:text-lg xl:text-2xl w-full"
        type="text"
      />

      <div className="relative">Email</div>
      <input
        {...register("email")}
        className="py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base md:text-lg xl:text-2xl w-full"
        type="email"
      />

      <div className="relative">Subject</div>
      <input
        {...register("subject")}
        className="py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base md:text-lg xl:text-2xl w-full"
        type="text"
      />

      <div className="relative">Message</div>
      <textarea
        rows={12}
        {...register("message")}
        className="py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base md:text-lg xl:text-2xl w-full shrink-0"
      />

      <button
        type="submit"
        className=" hover:bg-blue-500  rounded-6xl bg-midnightblue box-border w-[182px] h-[42px] flex flex-row items-center justify-center text-[16.51px] text-white border-[1.8px] border-solid border-color-text-dark transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        Submit
      </button>
    </div>
  </div>
</div>


  )
}

export default Contact