import React from 'react';
import PropTypes from 'prop-types';

import './HeroImage.css';

import { connect } from 'react-redux';

import { IMAGE_BASE_URL,BACKDROP_SIZE } from '../../../config'

const HeroImage = ({movie: {movies,heroImage,loading}, getMovies }) => {

    const image  = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`;



	return (
    	<div className="rmdb-heroimage"
			style={{
			background:
			  `linear-gradient(to bottom, rgba(0,0,0,0)
			  39%,rgba(0,0,0,0)
			  41%,rgba(0,0,0,0.65)
			  100%),
			  url('${image}'), #1c1c1c`
			}}
	    >
			<div className="rmdb-heroimage-content">
		        <div className="rmdb-heroimage-text">
			        <h1>{heroImage.original_title}</h1>
			        <p>{heroImage.overview}</p>
		        </div>
	      	</div>
      	</div>
    );
};



HeroImage.propTypes = {
  movie : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    movie: state.movie
});

export default connect(mapStateToProps,{})(HeroImage);
