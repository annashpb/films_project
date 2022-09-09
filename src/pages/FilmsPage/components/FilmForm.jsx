import { useState } from 'react';

const initialState = {
	title: '',
	img: '',
	description: '',
	director: '',
	duration: '',
	price: '',
	featured: false,
};

const FilmForm = () => {
	const [data, setData] = useState(initialState);

	const handleStringChange = (e) =>
		setData((x) => ({ ...x, [e.target.name]: e.target.value }));

	const handleNumberChange = (e) => {
		let value = parseFloat(e.target.value);
		value = isNaN(value) || value === 0 ? '' : Math.abs(value);
		setData((x) => ({ ...x, [e.target.name]: value }));
	}

	const handleCheckboxChange = (e) =>
		setData((x) => ({ ...x, [e.target.name]: e.target.checked }));

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit} className="ui form">
			<div className="ui  grid mb-3">
				{/*  ===================🌹 two column row START */}
				<div className="two column row">
					{/*  ===================🌹 left column START */}
					<div className="ten wide column">
						<div className="field error">
							<label htmlFor="title">Film title</label>
							<input
								value={data.title}
								onChange={handleStringChange}
								type="text"
								name="title"
								id="title"
								placeholder="film title"
							/>
							<div style={{ color: '#9a3f38' }}>title error</div>
						</div>

						<div className="field img-grid">
							<label
								value={data.img}
								onChange={handleStringChange}
								htmlFor="img"
							>
								Image
							</label>
							<input name="img" id="img" />

							<div className="inp-file">
								<label htmlFor="photo">Photo</label>
								<input type="file" id="photo" />
							</div>
						</div>
						<div className="column row field">
							<label htmlFor="description">
								Film description
							</label>
							<textarea
								value={data.description}
								onChange={handleStringChange}
								name="description"
								id="description"
								placeholder="film description"
							></textarea>
						</div>
					</div>
					{/* left column END 🌹 =================== */}

					<div className="six wide column">
						<img
							src="http://via.placeholder.com/250x250"
							alt="Placeholder"
							className="ui image imgfit"
						/>
					</div>
				</div>
				{/*   two column row END 🌹=================== */}
				{/* three columns START */}
				<div className="three column row mb-3">
					<div className="column field">
						<label htmlFor="director">Director</label>
						<input
							value={data.director}
							onChange={handleStringChange}
							type="text"
							name="director"
							id="director"
							placeholder="film director"
						/>
					</div>
					<div className="column field">
						<label htmlFor="duration">Duration</label>
						<input
							value={data.duration}
							onChange={handleNumberChange}
							type="number"
							name="duration"
							id="duration"
							placeholder="Duration"
						/>
					</div>
					<div className="column field">
						<label htmlFor="price">Price</label>
						<input
							value={data.price}
							onChange={handleNumberChange}
							type="number"
							name="price"
							id="price"
							placeholder="price"
						/>
					</div>
				</div>
				{/* three columns END */}
				<div className="six wide column inline field">
					<label htmlFor="featured">Featured</label>
					<input
						checked={data.featured}
						onChange={handleCheckboxChange}
						type="checkbox"
						name="featured"
						id="featured"
					/>
				</div>
				<div className="ui fluid buttons">
					<button className="ui button primary" type="submit">
						Save
					</button>
					<div className="or"></div>
					<span className="ui button">Hide form</span>
				</div>
			</div>
			{/* ===================🌹  grid END */}
		</form>
	);
};

export default FilmForm;
