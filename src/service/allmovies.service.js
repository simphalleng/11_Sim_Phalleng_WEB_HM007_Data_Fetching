// Get All Movies 
export async function getAllMoviesService(){
    const res= await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    //Convert from json object to javascript object
    const data = res.json();
    return data;

}
//Get By Genre
export async function getAllMovie(type){
    const res= await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${type}`);
    //Convert from json object to javascript object
    const data = res.json();
    return data;

}
//Get By Genre By Id
export async function getAllByMovieId(movie_id){
    const res= await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${movie_id}`);
    //Convert from json object to javascript object
    const data = res.json();
    return data;

}
