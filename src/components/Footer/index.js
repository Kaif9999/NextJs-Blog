"use client"

import React from 'react'
import { useForm } from 'react-hook-form';
import { GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from '../icons';
import Link from 'next/link';

const Footer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <footer className='mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light'>
        <h3 className='mt-16 font-medium text-center capitalize text-4xl px-4'>
        Interesting Stories | Updates | Guides
        </h3>
        <p className='mt-5 px-4 text-center w-3/5 font-light text-base'>
        Subscribe to learn about new technology and updates.
        © 2023 KaifBlogs. All rights reserved.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-6 min-w-[384px] flex items-strech bg-ligth p-2 rounded mx-4'>
      <input type="email" placeholder="Enter your Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
      className='w-full pl-0 bg-dark text-light focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'/>

      <input type="submit" className='bg-light text-dark cursor-pointer font-medium rounded px-5 py-1' />
    </form>
    
        <div className='flex items-center mt-8'>
          <a href="http://" className='w-6 inline-block h-6 mr-4'> <LinkedinIcon 
          className="hover:scale-125 translate-all ease duration-200"/></a>

          <a href="http://" className='w-6 inline-block h-6 mr-4 fill-light'> <GithubIcon 
          className="hover:scale-125 translate-all ease duration-200"/></a>

          <a href="http://" className='w-6 inline-block h-6 mr-4'> <TwitterIcon 
          className="hover:scale-125 translate-all ease duration-200"/></a>
        </div>

        <div className='w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between'>
            <span className='text-center'>&copy;2024 Kaif All rights reserved </span>
            <Link href="sitemap.xml" className='text-center underline'>sitemap.xml</Link>
            <div className='text-center'>Made with &hearts; by <a href="https://kaif9999.biz" className='underline'>Kaif</a></div>
        </div>
    </footer>
  )
}

export default Footer