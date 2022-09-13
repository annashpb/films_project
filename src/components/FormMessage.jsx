import PropTypes from 'prop-types';

const FormMessage = ({ type, children }) => {
	return (
		<div style={{ color: type === 'info' ? '#6597a7' : '#9a3f38' }}>
			{children}
		</div>
	);
};

// const FormMessage = ({ type, children }) => {
// 	let colorByType;
// 	switch (type) {
// 		case 'info':
// 			colorByType = '#6597a7';
// 			break;
// 		case 'error':
// 			colorByType = '#9a3f38';
// 			break;
// 		default:
// 			break;
// 	}

// 	return (
// 		<div style={{ color: colorByType }}>
// 			{children}
// 		</div>
// 	);
// };

FormMessage.propTypes = {
	type: PropTypes.oneOf(['info', 'error']).isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default FormMessage;
