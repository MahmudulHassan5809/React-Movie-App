import React,{ useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getMovies } from '../../actions/movieActions';

import MovieItem from './MovieItem';
import './Movies.css';

const Movies = ({movie: {movies,heroImage,loading,searchTerm}, getMovies }) => {
    useEffect(() => {
		getMovies();
    	// eslint-disable-next-line
    },[])



    return (

		<div className="rmdb-grid">
			{!loading && searchTerm !== '' && (
				<h1>Search Result Movies</h1>
			)}

			{!loading && searchTerm === '' && (
				<h1>Popular Movies</h1>
			)}
			<div className="rmdb-grid-content">
				{!loading && movies.length === 0 ? (
					<h3>No Movies To Show...</h3>
				) : (
					movies.map((movie,i) => (
						<div key={i} className="rmdb-grid-element">
							<MovieItem clickable={true} movie={movie} key={i} />
						</div>
					))
				)}
			</div>
		</div>

    );
};



Movies.propTypes = {
  getMovies : PropTypes.func.isRequired,
  movie :  PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    movie: state.movie
});

export default connect(mapStateToProps,{getMovies})(Movies);
