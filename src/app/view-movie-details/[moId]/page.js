import { getAllByMovieId } from '@/service/allmovies.service';
import React from 'react';
import { FaStar } from "react-icons/fa6";

const MovieDetails = async ({params}) => {
  // console.log("object",params.moId);
  const movieData = await getAllByMovieId(params.moId);
  const details  = movieData.payload;
  // console.log("object",movieData)
  const ratingStar = details.rating;
  const Star = (ratingStar)=>{
    const star=[];
    for(let i=0;i<5;i++){
      if(i<ratingStar){ 
        star.push(<FaStar key={i} color='#ffa500'/>);
    }
    else {
      return star;
    }
  }
   
  }
  return (
    <div className="bg-red-950 w-full dark:bg-gray-800 py-8">
      <div className="w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div  className="flex flex-col w-full md:flex-row mt-20 -mx-4">
            <div className="md:flex-1 w-[600px] px-4">
              <div className="h-[550px] w-[750px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={details.image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 ml-44 px-4">
              <h2 className="text-2xl font-bold text-white">{details.director}</h2>
              <p className="text-gray-400 text-sm">{details.runtime} minutes</p>
              <p className="text-gray-400 text-sm">{details.genre}</p>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-600 mb-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg> */}
              <div className=" flex flex-row">
                {Star(ratingStar)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{details.movie_title} ({details.released_year})</h2>
                <p className="text-gray-400 text-xl line-clamp-4  dark:text-gray-300 mt-2">{details.description}</p>
                <p className="text-gray-400 text-sm mt-10 mb-4">{details.posted_at}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default MovieDetails;
