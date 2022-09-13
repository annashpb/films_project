import { useState } from 'react';
import FormMessage from 'components/FormMessage';

const initialData = {
	email: '',
	password: '',
	confirm_password: '',
};

const SignupForm = () => {
	const [data, setData] = useState(initialData);
	const [errors, setErrors] = useState({});

	const handleStringChange = (e) => {
		setData((x) => ({ ...x, [e.target.name]: e.target.value }));
		setErrors((x) => ({ ...x, [e.target.name]: '' }));
	};

	const clearForm = () => {
		setData(initialData);
		setErrors({});
	};

	const validate = (data) => {
		const errors = {};
		if (!data.email) errors.email = 'Email cannot be blank';
		if (!data.password) errors.password = 'Password cannot be blank';
		if (!data.confirm_password) errors.confirm_password = 'Password confirmation cannot be blank';
		if (data.password !== data.confirm_password) errors.confirm_failed = `You've entered a wrong password on confirm`;
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate(data);
		setErrors(errors);
		if (Object.keys(errors).length === 0) {
			console.log(data);
			setData(initialData);
			setErrors({});
		}
	};

	return (
		<div>
			<h2>Signup form</h2>
			<form onSubmit={handleSubmit} className="ui form">
				<div className="ui mb-3">
					<div
						className={`field column ${
							errors.email ? 'error' : ''
						}`}
					>
						<label htmlFor="title">Email</label>
						<input
							value={data.email}
							onChange={handleStringChange}
							type="email"
							name="email"
							id="login-email"
							placeholder="Email"
						/>
						{errors.email && (
							<FormMessage type="error">{errors.email}</FormMessage>
						)}
					</div>
				</div>
				<div className="ui mb-3">
					<div
						className={`field column ${
							errors.password ? 'error' : ''
						}`}
					>
						<label htmlFor="title">Password</label>
						<input
							value={data.password}
							onChange={handleStringChange}
							type="text"
							name="password"
							id="login-password"
							placeholder="Password"
						/>
						{errors.password && (
							<FormMessage type="error">{errors.password}</FormMessage>
						)}
					</div>
				</div>
				<div className="ui mb-3">
					<div
						className={`field column ${
							(errors.confirm_password || errors.confirm_failed) ? 'error' : ''
						}`}
					>
						<label htmlFor="title">Password confirmation</label>
						<input
							value={data.confirm_password}
							onChange={handleStringChange}
							type="text"
							name="confirm_password"
							id="signup-confirm_password"
							placeholder="Confirm password"
						/>
						{errors.confirm_password && (
							<FormMessage type="error">{errors.confirm_password}</FormMessage>
						)}
						{errors.confirm_failed && (
							<FormMessage type="error">{errors.confirm_failed}</FormMessage>
						)}
					</div>
				</div>

				<div className="ui fluid buttons">
					<button className="ui button primary" type="submit">
						Login
					</button>
					<div className="or"></div>
					<span onClick={clearForm} className="ui button">
						Cancel
					</span>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
