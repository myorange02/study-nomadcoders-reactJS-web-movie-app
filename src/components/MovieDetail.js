import PropTypes, { string } from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({id, medium_coverImg, large_coverImg, title, year, genres, rating, runtime, description}) {
  return (
    <div>
      <header>
        <div>
          <Link to={'../../'}>Back to Home</Link>
        </div>
      </header>
      <div>
        <img src={large_coverImg} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <ul>
          <li>YEAR : {year}</li>
          <li>GENRES : {genres}</li>
          <li>RATING : {rating}</li>
          <li>RUNTIME : {runtime}min</li>
        </ul>
        {description === "" ? null : <div>{description}</div>}
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.string.isRequired,
  medium_coverImg: PropTypes.string.isRequired,
  large_coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  description: PropTypes.string
}

export default MovieDetail;