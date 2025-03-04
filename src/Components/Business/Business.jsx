import React, { useContext } from 'react'
import { getNews } from '../../Services/newsApi';
import { useEffect, useState } from 'react'
import staticImg from '../../assets/2968360.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { NewsContext } from '../../Context/NewsContext';

export default function Business() {
    const [news, setNews] = useState([]);
    let { setNewww } = useContext(NewsContext)

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        getNews({ category: 'business' }).then((articles) => {
            setNews(articles);
        });
    }, []);



    return (
        <>
            {news.length > 0 ? <div className='flex flex-wrap gap-4 justify-center w-[97%] mx-auto my-10'>
                {news.map((item) => <div data-aos="flip-left" className="justify-between md:w-[23%] w-[90%] items-center p-5 relative flex flex-col rounded-xl bg-white bg-clip-border shadow-md dark:bg-blue-950">
                    <div className="h-40 relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                        <img className='w-full h-full object-cover' loading="lazy" src={item.urlToImage ? item.urlToImage : staticImg} alt="NewsImage" />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased dark:text-white">
                            {item.title} ...
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased dark:text-white">
                            {item.description?.split(" ").slice(0, 6).join(" ")} ...
                        </p>
                        <p className='text-blue-600 font-bold dark:text-blue-400'>source: {item.source.name}</p>
                    </div>
                    <div className="p-6 pt-0">
                        <Link to='/details' onClick={() => setNewww(item)}>
                            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:bg-sky-800">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>)}
            </div>
                :
                <div className="h-screen flex justify-center items-center">
                    <span className="loader"></span>
                </div>}
        </>
    )
}
