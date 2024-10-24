import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? <h1>Loading...</h1> 
        : <MovieDetail 
            key={id}
            id={id}
            medium_coverImg={movie.medium_cover_image}
            large_coverImg={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            genres={movie.genres}
            rating={movie.rating}
            runtime={movie.runtime}
            description={movie.description}
          />
      }
    </div>
  );
}

export default Detail;