import React,{ useEffect } from 'react';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie,getCredits } from '../../actions/movieActions';

import Navigation from '../layout/Navigation/Navigation';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfo/MovieInfoBar';
import Actors from '../Actors/Actors';
import Spinner from '../layout/Spinner/Spinner';
import './Movie.css';

const Movie = ({ movie:{movie,actors,directors,loading}, getCredits,getMovie,match,location }) => {

	useEffect(() => {
		getMovie(match.params.movieId);
		// eslint-disable-next-line
    },[])



    return (
		<div className="rmdb-movie">
			{movie ? (
				<div>
					<Navigation movieName={movie.original_title} />
					<MovieInfo movie={movie} directors={directors} />
					<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
				</div>
			) : null}
			{actors ? (
				<div className="rmdb-movie-grid">
					<Actors actors={actors} />
				</div>
			) : null}
			{!actors && !loading ? <h1>No Movie Found!</h1> : null}
          	{loading ? <Spinner /> : null}

		</div>
    );
};

Movie.propTypes = {
  getMovie : PropTypes.func.isRequired,
  getCredits : PropTypes.func.isRequired,
  movie : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    movie: state.movie
});


export default connect(mapStateToProps,{getMovie,getCredits})(Movie);
