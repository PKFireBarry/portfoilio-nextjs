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
    <div className='relative justify-center items-center h-screen w-screen '>

                <h3 className="font-semibold text-lg md:text-4xl uppercase tracking-[2px] text-black underline m-4 bg-orange-500">
            Contact
          </h3>

          <div className='mx-auto w-[85%] h-[85%] px-4 sm:px-6 lg:px-8 flex justify-center items-center text-black bg-rose-500'>

          <div className="flex flex-col items-start justify-start gap-[20px] md:w-1/2">
            <div className="relative  text-6xl">Let’s Talk</div>
            <div className="relative text-xl inline-block w-[538px]">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help
            </div>
          <div className="flex flex-col items-start justify-start gap-[20px] text-13xl">
            <b className="relative font-bold text-3xl">Email</b>
            <div className="relative text-base">beebs@gmail.com</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px] text-base">
            <b className="relative text-13xl font-bold text-3xl">Socials</b>
            <div className="relative [text-decoration:underline]">Github</div>
            <div className="relative [text-decoration:underline]">Linkedin</div>
            <div className="relative [text-decoration:underline]">Spotify</div>
          </div>
          </div>


  <div className='grid grid-cols-1 gap-[15px] md:w-1/2 bg-green-500 font-poppins'>
    <div className="relative">Name</div>
    <input {...register('name')} placeholder='Name' className='py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base md:text-lg xl:text-2xl w-full' type='text'/>

    <input {...register('email')} placeholder='Email' className='py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base md:text-lg xl:text-2xl w-full' type="email"/>

    <input {...register('subject')} placeholder='Subject' className='py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base md:text-lg xl:text-2xl w-full' type='text'/>

    <textarea rows={12} {...register('message')} placeholder='Message' className='py-2 px-4 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base md:text-lg xl:text-2xl w-full' />

  <button type='submit' className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-base md:text-lg xl:text-2xl mt-4'>Submit</button>    

  </div>
  
</div>

    </div>

  )
}

export default Contact