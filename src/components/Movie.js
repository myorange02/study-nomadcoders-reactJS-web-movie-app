import PropTypes, { string } from "prop-types";
import { Link } from "react-router-dom";
import style from './Movie.module.css';

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div className={style.movieBox}>
            <img src={coverImg} alt={title} />
            <h2 className={style.title}>
                <Link to={`./movie/${id}`}>{title}</Link>
            </h2>
            <p className={style.summary}>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(string).isRequired
}

export default Movie;