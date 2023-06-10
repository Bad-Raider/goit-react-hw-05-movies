
const MovieDetailsItem = ({ title, overview, genres, poster_path, year, score   }) => {
    
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <>
            <img width='200px' src={`${baseUrl}${poster_path}`} alt={title} />
            <h1>{`${title} (${year})`}</h1>
            <p>{`User score: ${score} %`}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres}</p>
        </>
    )
};

export default MovieDetailsItem;