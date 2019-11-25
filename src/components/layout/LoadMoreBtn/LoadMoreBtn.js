import React from 'react';
import PropTypes from 'prop-types';

import './LoadMoreBtn.css';

import { connect } from 'react-redux';
import { loadMore } from '../../../actions/movieActions';

const LoadMoreBtn = ({ movie: { currentPage,searchTerm } , loadMore}) => {

	const onClick = () => {
		loadMore(currentPage,searchTerm)
	};

    return (
        <div className="rmdb-loadmorebtn" onClick={onClick}>
            <p>Load More</p>
        </div>
    );
};

LoadMoreBtn.propTypes = {
	movie : PropTypes.object.isRequired,
  	loadMore : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    movie: state.movie
});

export default connect(mapStateToProps,{loadMore})(LoadMoreBtn);
