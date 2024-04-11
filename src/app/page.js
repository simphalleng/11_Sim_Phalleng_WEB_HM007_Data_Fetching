import AllMoviesComponent from "@/Components/AllMoviesComponent";
import HomepageComponent from "@/Components/HomepageComponent";
import TypeMovieComponent from "@/Components/TypeMovieComponent";

export default function Home() {
  return (
   <main>
    <HomepageComponent/>
    <AllMoviesComponent/>
    <TypeMovieComponent/>
   
   </main>
  );
}
