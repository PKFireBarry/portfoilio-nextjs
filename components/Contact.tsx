import React, { useEffect, useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
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
    <div className='h-screen min-h-screen  flex relative flex-col md:text-left  md:flex-col max-w-4xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-lg xl:text-2xl text-base mx-auto'>Contact</h3>

        <div className='flex flex-col space-y-10 pt-12 mx-auto'>
            <h4>
                <span className='text-base md:text-2xl xl:text-4xl sm:text-base font-semibold'>Let&#39;s</span> <span className='text-2xl md:text-2xl sm:text-base underline'>connect</span>

            </h4>
        </div>

        <div className='space-y-10 sm:flex-row'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-blue-300 h-7 w-7 animate-pulse'/>
                <p className='text-base xl:text-2xl sm:text-sm md:text-base '>813-995-7019</p>
            </div>
                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-blue-300 h-7 w-7 animate-pulse'/>
                <p className='text-base xl:text-2xl sm:text-sm md:text-base '>Tampa, FL</p>
            </div>
                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-blue-300 h-7 w-7 animate-pulse'/>
                <p className='text-base xl:text-2xl sm:text-sm md:text-base '>Barry0719@gmail.com</p>
            </div>
        </div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:flex-shrink-0 space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactinput' type='text'/>
                    <input {...register('email')} placeholder='Email' className='contactinput' type="email"/>
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactinput' type='text'/>
                <textarea {...register('message')} placeholder='Message' className='contactinput' />
                <button type='submit' className='bg-blue-400 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Contact