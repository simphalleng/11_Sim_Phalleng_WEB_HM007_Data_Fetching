import { getAllMovie, getAllMoviesService } from '@/service/allmovies.service';
import React from 'react'
import Link from 'next/link'
import CardMovieComponent from './CardMovieComponent';

const TypeMovieComponent = async ({type}) => {
    const allmoviesdetails= await getAllMoviesService();
    const getmoviedetails= new Set();
    // console.log("All Movie Detail",allmoviesdetails)
    allmoviesdetails.payload.forEach(element => {
        if(element.genre){
            getmoviedetails.add(element.genre);
        }
    });
    const getGenre = Array.from(getmoviedetails);
    console.log("Get Genre ",getGenre);
    // console.log("Genre",getmoviedetails);
    const typemovieData = await getAllMovie(type);
  return (
    <main>
    <div className=" bg-red-950 h-auto w-full ">
        {getGenre?.map((data)=>( 
         <div>
            <h1 className=" text-xl text-white pt-5 ml-10">{data} Movie &gt; </h1>
            <div>
                <CardMovieComponent moviestype= {data} />
            </div>
         </div>

       
    ))}
   
     </div>  
</main>
  )
}
export default TypeMovieComponent
