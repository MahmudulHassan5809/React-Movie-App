import React,{ useRef } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import { connect } from 'react-redux';
import { searchMovies } from '../../../actions/movieActions';

import './SearchBar.css';

const SearchBar = ({searchMovies}) => {
	const text = useRef('');

	const onChange = (e) => {
		searchMovies(text.current.value);
	}

    return (
		<div className="rmdb-searchbar">
	        <div className="rmdb-searchbar-content">
				<form>
					<FontAwesome className="rmdb-fa-search" name="search" size="2x" />
					<input
					type="search"
					className="rmdb-searchbar-input"
					placeholder="Search"
					ref={text}
					onChange={onChange}
					required
					/>
				</form>
	        </div>
      </div>
    );
};

SearchBar.propTypes = {
	searchMovies : PropTypes.func.isRequired
}



export default connect(null,{searchMovies})(SearchBar);
