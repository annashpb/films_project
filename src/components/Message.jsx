import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ children, type, color }) => {
	return (
		<div aria-label="message" className={`ui icon message ${color}`}>
			<i className={`icon ${type}`}></i>
			<div className="content">
				<div className="header">{children}</div>
			</div>
		</div>
	);
};

Message.defaultProps = {
	type: 'info',
	color: 'olive',
};

Message.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	type: PropTypes.oneOf(['info', 'bell', 'star', 'outline']).isRequired,
	color: PropTypes.oneOf(['olive', 'blue', 'orange']).isRequired,
};

export default Message;
