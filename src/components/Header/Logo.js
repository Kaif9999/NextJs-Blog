import React from 'react'
import Link from 'next/link'
import profileImg from '@/public/profile-img.png'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
        <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
            <Image src={profileImg} alt="Profile Image" className="w-full h-auto rounded-full bg-white"/>
        </div>
        <span className="font-bold text-xl">KaifBlogs</span>
    </Link>
  )
}

export default Logo