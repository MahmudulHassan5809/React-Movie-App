import React from 'react';
import PropTypes from 'prop-types';

import ActorItem from './ActorItem';

import './Actors.css';

const Actors = ({ actors }) => {
    return (
		<div className="rmdb-grid" style={{marginTop: '10px'}}>
			<div className="rmdb-grid-content">
				{actors.length === 0 ? (
					<h3>No Actors To Show...</h3>
				) : (
					actors.map((actor,i) => (
						<div key={i} className="rmdb-grid-element">
							<ActorItem actor={actor} key={i} />
						</div>
					))
				)}
			</div>
		</div>
    );
};



Actors.propTypes = {
   actors : PropTypes.array.isRequired
};

export default Actors;
