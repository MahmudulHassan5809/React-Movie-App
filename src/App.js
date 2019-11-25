import React,{ Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/layout/NotFound/NotFound';
import Movie from './components/Movie/Movie';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
    	<Router>
    		<Provider store={store}>
		        <Fragment>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/:movieId" component={Movie} />
						<Route component={NotFound}/>
					</Switch>
		        </Fragment>
	        </Provider>
    	</Router>
    );
}

export default App;
