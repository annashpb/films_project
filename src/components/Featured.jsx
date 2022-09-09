import {useContext} from 'react';
import PropTypes from 'prop-types'
import FilmContext from '../contexts/FilmContext'

const Featured = ({ item = {} }) => {
	const toggleFeatured = useContext(FilmContext)
	const cls = item.featured ? 'yellow' : 'empty'
	return (
		<span className="ui right corner label" onClick={() => toggleFeatured(item._id)}>
			<i className={`${cls} star icon`}></i>
		</span>
	);
};

Featured.propTypes ={
	item: PropTypes.object.isRequired
}

export default Featured;
