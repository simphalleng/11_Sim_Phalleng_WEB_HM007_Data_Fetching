'use client';
import { getAllMovie } from '@/service/allmovies.service'
import React from 'react'
import Link from 'next/link'
const CardMovieComponent = async ({moviestype}) => { 
  const cardMovieData = await getAllMovie(moviestype);
  console.log("Card movie",cardMovieData)
  return (
    <main>
        <div className="carousel flex m-auto mt-5 rounded-box w-[95%] overflow-x-scroll gap-4 overflow-hidden no-scrollbar">
       {/* {card block} */}
        {cardMovieData.payload?.map((data)=>(
             <div key={data.movie_id} className="carousel-item">
             <div className="max-w-sm bg-white w-96 h-96 border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                 <Link  href={`/view-movie-details/${data.movie_id}`}>
                     <img className="rounded-t-lg w-[90%] m-5" src={data.image==""?"https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x":data.image} alt="" />
                 </Link>
                 <div className="p-5">
                     <a href="#">
                     <h5 className=" line-clamp-1 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray">
                    {data.movie_title}
                     </h5>
                     </a>
                     <p className=" line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden  max-h-14 ">
                        {data.description}
                     </p>
                     
                 </div>
                 </div>
         </div>
        ))}
    </div>
</main>
  )
}
export default CardMovieComponent
