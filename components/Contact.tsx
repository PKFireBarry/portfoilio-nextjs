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
    <div className='relative flex justify-center items-center h-screen w-screen '>
<div className='mx-auto px-4 sm:px-6 lg:px-8'>
  <h3 className='text-center uppercase tracking-[20px] text-gray-500 md:text-left md:text-lg xl:text-2xl text-base'>Contact</h3>

  <div className='flex flex-col space-y-10 pt-12 mx-auto'>
    <h4>
      <span className='text-base md:text-2xl xl:text-4xl sm:text-base font-semibold'>Let&#39;s</span> <span className='text-2xl md:text-2xl sm:text-base underline'>connect</span>
    </h4>
  </div>

  <div className='grid grid-cols-1 gap-16 w-[75vw]'>
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