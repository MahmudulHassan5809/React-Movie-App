import {
	GET_MOVIES,
	SET_LOADING,
	MOVIE_ERROR,
	SEARCH_MOVIES,
	SET_SEARCH_TERM,
	LOAD_MORE,
	GET_MOVIE,
	GET_CREDITS
} from './types';

import {
	API_URL,
	API_KEY
} from '../config';

import axios from 'axios';

// get movies from server
export const getMovies =  () => dispatch => {
	dispatch(setLoading());
	axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
		.then(data => {
			dispatch({
				type: GET_MOVIES,
				payload: data.data
			});
		})
		.catch(error => {
			dispatch({
				type: MOVIE_ERROR,
				payload: error.response.data.status_message
			});
		});
};

// seach logs from server
export const searchMovies = (text) => dispatch => {
	dispatch(setLoading());
	let endPoint;
	if(text === ''){
		endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
	}else{
		endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${text}`;

	}

	axios.get(endPoint)
		.then(data => {
			dispatch({
				type: SEARCH_MOVIES,
				payload: data.data
			});
			dispatch(setSearchTerm(text));
		})
		.catch(error => {
			dispatch({
				type: MOVIE_ERROR,
				payload: error.response.data.status_message
			});
		});
};

// load more movies
export const loadMore = (currentPage,searchTerm) => dispatch => {
	dispatch(setLoading());
	let endPoint;
	if (searchTerm === '') {
    	endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
    }else {
    	endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage + 1}`;
    }


	axios.get(endPoint)
		.then(data => {
			dispatch({
				type: LOAD_MORE,
				payload: data.data
			});
		})
		.catch(error => {
			dispatch({
				type: MOVIE_ERROR,
				payload: error.response.data.status_message
			});
		});
};


// get single movie from server
export const getMovie =  (movieId) => dispatch => {
	dispatch(setLoading());
	axios.get(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
		.then(data => {
			dispatch({
				type: GET_MOVIE,
				payload: data.data
			});
			dispatch(getCredits(movieId));
		})
		.catch(error => {
			console.log(error);
			dispatch({
				type: MOVIE_ERROR,
				payload: error.response.data.status_message
			});
		});
};

// get single movie credits from server
export const getCredits =  (movieId) => dispatch => {
	dispatch(setLoading());
	axios.get(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
		.then(data => {
			dispatch({
				type: GET_CREDITS,
				payload: data.data
			});
		})
		.catch(error => {
			dispatch({
				type: MOVIE_ERROR,
				payload: error.response.data.status_message
			});
		});
};


// set loaidng to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	}
};


// set search Term
export const setSearchTerm = (text) => {
	return {
		type: SET_SEARCH_TERM,
		payload: text
	}
};
