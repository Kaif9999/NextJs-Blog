import React from 'react'
import Logo from './Logo';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from '../icons';

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
        <Logo />
        <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"> 
          <Link href="/" className='mx-2'>Home</Link>
          <Link href="/about" className='mx-2'>About</Link>
          <Link href="/contact" className='mx-2'>Contact</Link>
          <button>
            <SunIcon />
          </button>
        </nav>
        <div>
          <a href="http://" className='w-6 inline-block h-6 mr-2'><LinkedinIcon className="hover:scale-125 translate-all ease duration-200"/></a>
          <a href="http://" className='w-6 inline-block h-6 mr-2'><GithubIcon className="hover:scale-125 translate-all ease duration-200"/></a>
          <a href="http://" className='w-6 inline-block h-6 mr-2'><TwitterIcon className="hover:scale-125 translate-all ease duration-200"/></a>

        </div>
    </header>
  )
}

export default Header;