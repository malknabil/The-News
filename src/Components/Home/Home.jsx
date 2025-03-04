import React from 'react'
import img from '../../assets/3226072_43017.svg'

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row dark:bg-sky-800'>
        <div className='md:w-1/2 w-full'>
          <img className='w-full' src={img} alt="" />
        </div>
        <div className='hello flex flex-col justify-center items-start p-9'>
          <h1 className='text-blue-700 text-4xl font-thin dark:text-blue-50'>Welcome To Our Site</h1>
          <p className='py-4 italic block font-sans text-base font-light leading-relaxed text-inherit antialiased dark:text-white'>Here you can view all the latest world news on a daily basis, all countries and also all categories collected for you in one place</p>
        </div>
      </div>
    </>
  )
}
