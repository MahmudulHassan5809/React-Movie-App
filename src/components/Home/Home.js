import React from 'react';
import PropTypes from 'prop-types';

import './Home.css';

import HeroImage  from '../layout/HeroImage/HeroImage';
import SearchBar  from '../layout/SearchBar/SearchBar';
import LoadMoreBtn  from '../layout/LoadMoreBtn/LoadMoreBtn';
import Spinner  from '../layout/Spinner/Spinner';
import Movies from '../Movies/Movies';

import { connect } from 'react-redux';


const Home = ({movie: {heroImage,loading,currentPage,totalPages} }) => {

	return (
		<div className="rmdb-home">
			{ heroImage && (
				<div>
					<HeroImage />
					<SearchBar />
				</div>
			)}
			<div className="rmdb-home-grid">
				<Movies />
			</div>
			{loading ? <Spinner/> : null}
			{currentPage <= totalPages && !loading ? <LoadMoreBtn/> : null}

		</div>
    );
};

Home.propTypes = {
  movie :  PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    movie: state.movie
});

export default connect(mapStateToProps,{})(Home);
