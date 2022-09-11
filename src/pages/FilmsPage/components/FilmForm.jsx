import { useState } from 'react';
import { genres, tags as tagsList } from '../../../data';

const FilmForm = () => {
	const [tags, setTags] = useState([]);
	const [genre, setGenre] = useState('');
	const [sel, setSel] = useState('');
	const [multiSel, setMultiSel] = useState([]);

	const handleTagsChange = () => {};

	const handleGenreChange = () => {};

	const handleSelectChange = () => {};

	const handleMultiSelect = () => {};

	return (
		<form className="ui form">
			<div className="ui grid">
				<div className="four wide column">
					{/*  =========================  tags  ================  */}
					<div className="grouped fields">
						<label>Tags</label>
						<div className="field">
							<div className="ui checkbox field">
								<input type="checkbox" id="tag1" />
								<label htmlFor="tag1">Tag 1</label>
							</div>
						</div>
					</div>
				</div>
				{/*  ==============================   genre ================  */}
				<div className="four wide column">
					<div className="grouped fields">
						<label>Genres</label>
						{/* Start genres ====== */}
						Genres here
						{/* ====== finish genres  */}
					</div>
				</div>
				{/*  ==============================   sel ================  */}
				<div className="four wide column">
					<select className="ui dropdown">
						<option value="1111">tag 1</option>
					</select>
				</div>
				{/*  ==============================  multipleSelect ================  */}
				<div className="four wide column">
					<select multiple size="SIZE">
						<option value="1111">tag 1</option>
					</select>
				</div>
			</div>

			{/* ====================================================== */}
		</form>
	);
};

export default FilmForm;
