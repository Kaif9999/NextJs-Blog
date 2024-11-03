import { format } from 'date-fns'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogLayoutTwo = ({blog}) => {
  return (
    <div className='group grid grid-cols-12 gap-4 items-center text-dark'>
        <Link href={blog.url} className= "col-span-4 h-full rounded-xl overflow-hidden">
            <Image 
            src = {blog.image.filePath.replace("../public", "")}
            placeholder = "blur"
            blurDataURL = {blog.image.blurhashDataUrl}
            alt = {blog.title}
            width = {blog.image.width}
            height = {blog.image.height}
            className = 'aspest-square w-full h-full object-center object-cover group-hover:scale-105 transition-all duration-300 ease'
            />
        </Link>

        <div className="col-span-8 w-full">
        <span className='uppercase text-accent font-semibold text-sm'>{blog.tags[0]}</span>
       <Link href={blog.url} className='inline-block my-1'>
       <h2 className='text-2xl capitalize font-semibold tgext-lg text-dark mt-4'>
        <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
        {blog.title}
        </span>
       </h2>
       </Link>
       <span className='capitalize text-dark/50 font-semibold text-base'>
        {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
       </span>
        </div>

    </div>
  )
}

export default BlogLayoutTwo