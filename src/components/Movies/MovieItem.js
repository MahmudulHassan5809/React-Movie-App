import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { IMAGE_BASE_URL,POSTER_SIZE } from '../../config';

import './MovieItem.css';

const MovieItem = ({movie,clickable}) => {
	const image = movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : '/images/no_image.jpg';

    return (

		<div className="rmdb-moviethumb">
			{clickable ? (
				<Link to={{ pathname: `/${movie.id}`, movieName: `${movie.movieName}`}}>
				<img src={image} alt="moviethumb"/>
			</Link>
			) : (
				<img src={image} alt="moviethumb"/>
			)}
		</div>

    );
};


MovieItem.propTypes = {
    movie : PropTypes.object.isRequired,
    clickable : PropTypes.bool.isRequired
};

export default MovieItem;
