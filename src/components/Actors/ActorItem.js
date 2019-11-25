import React from 'react';
import PropTypes from 'prop-types';

import './ActorItem.css';

import {IMAGE_BASE_URL} from '../../config';

const ActorItem = ({actor}) => {
	const POSTER_SIZE = "w154";
    return (
		<div className="rmdb-actor">
			<img
			src={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : './images/no_image.jpg'}
			alt="actorthumb"
			/>
			<span className="rmdb-actor-name">{actor.name}</span>
			<span className="rmdb-actor-character">{actor.character}</span>
	    </div>

    );
};

ActorItem.displayName = 'ActorItem';

ActorItem.propTypes = {
    actor : PropTypes.object.isRequired,
};

export default ActorItem;
