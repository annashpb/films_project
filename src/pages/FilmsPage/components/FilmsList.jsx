import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from './FilmCard';
import Message from '../../../components/Message';

const FilmsList = ({ films = [] }) => {
	return (
		<div className="ui four cards">
			{films.length === 0 ? (
				<Message type="bell" color="blue">No films yet</Message>
			) : (
				films.map((film) => <FilmCard key={film._id} film={film} />)
			)}
		</div>
	);
};

FilmsList.propTypes = {
	films: PropTypes.arrayOf(PropTypes.object),
};

export default FilmsList;
