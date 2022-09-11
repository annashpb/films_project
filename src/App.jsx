import { useState, useEffect } from 'react';
import _sortBy from 'lodash/sortBy';
import FilmsList from './pages/FilmsPage/components/FilmsList';
// import FilmsForm from './pages/FilmsPage/components/FilmForm';
import { items } from './data';
import FilmContext from './contexts/FilmContext';

const sortFilms = (films) => _sortBy(films, ['title']);

const App = () => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		setFilms(items);
	}, []);

	const toggleFeatured = (id) => setFilms(films => sortFilms(films.map(film => film._id === id ? {...film, featured: !film.featured} : film )));

	const value= toggleFeatured;

	return (
		<div className="ui container mt-3">
			<FilmContext.Provider value={value}>
				<FilmsList films={films} />
				{/* <FilmsForm /> */}
			</FilmContext.Provider>
		</div>
	);
};

export default App;
