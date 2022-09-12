import { useState } from 'react';
import { genres, tags as tagsList } from '../../../data';

const FilmForm = () => {
	const [tags, setTags] = useState([]);
	const [genre, setGenre] = useState('');
	const [sel, setSel] = useState('');
	const [multiSel, setMultiSel] = useState([]);

	const handleTagsChange = (id) =>
		setTags((v) =>
			v.includes(id) ? v.filter((x) => x !== id) : [...v, id]
		);

	const handleGenreChange = (g) => setGenre(g);

	const handleSelectChange = ({target}) => {
		const {value} = target;
		if(parseInt(value) === -1) {
			alert('select option')
			return;
		}
		setSel(value);
	};

	const handleMultiSelect = ({ target }) => {
		const multipleSelect = [...target.selectedOptions].map(o => o.value);
		setMultiSel(multipleSelect);
	};

	return (
		<form className="ui form">
			<div className="ui grid">
				<div className="four wide column">
					{/*  =========================  tags  ================  */}
					<div className="grouped fields">
						<label>Tags</label>
						{tagsList?.map((tag) => (
							<div className="field" key={`tags_${tag._id}`}>
								<div className="ui checkbox field">
									<input
										type="checkbox"
										id={`tags_${tag._id}`}
										onChange={() =>
											handleTagsChange(tag._id)
										}
										checked={tags.includes(tag._id)}
									/>
									<label htmlFor={`tags_${tag._id}`}>
										{tag.title}
									</label>
								</div>
							</div>
						))}
					</div>
				</div>
				{/*  ==============================   genre ================  */}
				<div className="four wide column">
					<div className="grouped fields">
						<label>Genres</label>
						{genres?.map((g) => (
							<div
								className="ui radio checkbox field"
								key={`genres_${g._id}`}
							>
								<input
									type="radio"
									name="example2"
									checked={genre === g._id}
									id={`genres_${g._id}`}
									onChange={() => handleGenreChange(g._id)}
								/>
								<label htmlFor={`genres_${g._id}`}>
									{g.title}
								</label>
							</div>
						))}
					</div>
				</div>
				{/*  ==============================   sel ================  */}
				<div className="four wide column">
					<select className="ui dropdown" value={sel} onChange={handleSelectChange}>
						<option value="-1">Choose</option>
						{genres?.map((g) => (
							<option value={g._id} key={`sel_${g._id}`}>
								{g.title}
							</option>
						))}
					</select>
				</div>
				{/*  ==============================  multipleSelect ================  */}
				<div className="four wide column">
					<select multiple value={multiSel} onChange={handleMultiSelect} size={genres.length}>
						{genres?.map((g) => (
							<option value={g._id} key={`multisel_${g._id}`}>
								{g.title}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* ====================================================== */}
		</form>
	);
};

export default FilmForm;
