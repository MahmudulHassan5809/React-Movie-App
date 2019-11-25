import {
	GET_MOVIES,
	MOVIE_ERROR,
	SEARCH_MOVIES,
	SET_LOADING,
	SET_SEARCH_TERM,
	LOAD_MORE,
	GET_MOVIE,
	GET_CREDITS
} from '../actions/types';

const initialState = {
	movies: [],
	heroImage: null,
	movie: null,
	actors: null,
	directors: [],
	currentPage: 0,
	totalPages:0,
	searchTerm: '',
	loading: false,
	error: null,
};


export default(state = initialState,action) => {
	switch (action.type) {
		case GET_MOVIES:
		case SEARCH_MOVIES:
			return {
				...state,
				movies: action.payload.results,
				heroImage: state.heroImage ||  action.payload.results[0],
				loading: false,
				currentPage: action.payload.page,
				totalPages: action.payload.total_pages
			};
		// case SEARCH_MOVIES:
		// 	return {
		// 		...state,
		// 		movies: action.payload.results,
		// 		loading: false,
		// 	};
		case LOAD_MORE:
			return {
				...state,
				movies: [...state.movies,...action.payload.results],
				loading: false,
				heroImage: state.heroImage ||  action.payload.results[0],
				currentPage: action.payload.page,
				totalPages: action.payload.total_pages
			};
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false,
			};
		case GET_CREDITS:
			return {
				...state,
				directors: action.payload.crew.filter((member) => member.job === 'Director'),
				actors: action.payload.cast,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case SET_SEARCH_TERM:
			return {
				...state,
				searchTerm: action.payload
			};
		case MOVIE_ERROR:
			return{
				...state,
				error: action.payload
			};
		default:
			return state;
	}
}
