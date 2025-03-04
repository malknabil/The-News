import React, { useContext, useEffect } from 'react'
import { NewsContext } from '../../Context/NewsContext'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function NewsDetails() {

    let { Newww } = useContext(NewsContext)

    useEffect(() => {
            AOS.init();
        }, [])

    return (
        <>
            <div className='w-[90%] mx-auto md:flex md:flex-wrap md:gap-6 my-10'>
                <img data-aos="fade-right" className='rounded-md shadow-lg shadow-black/40 md:w-[45%]' loading="lazy" src={Newww?.urlToImage} alt="NewImg" />
                <div data-aos="fade-left" className='md:w-[45%]'>
                    <h1 className='text-2xl my-4 text-blue-600 italic font-bold dark:text-blue-950'>{Newww?.title}</h1>
                    <p className='my-4 dark:text-white'>{Newww?.description}</p>
                    <p className='dark:text-white'>{Newww?.content}</p>
                    <div className='my-4 md:w-[45%]'>
                        <p className='text-xl w-full text-center dark:text-white'><span className='text-blue-600 dark:text-blue-950 font-bold'>published At: </span>{Newww?.publishedAt}</p>
                        <p className='text-xl text-center dark:text-white'><span className='text-blue-600 dark:text-blue-950 font-bold'> Written By:</span> {Newww?.author ? Newww.author : "unknown"}</p>
                    </div>
                    <Link to={-1}>
                        <button className='bg-blue-700 text-white py-4 px-3 my-4 font-semibold rounded-md hover:bg-blue-900 hover:shadow-lg hover:shadow-blue-500/40 dark:bg-blue-950'>More News</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
