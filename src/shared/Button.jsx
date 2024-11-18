import PropTypes from "prop-types";

function Button({ children, className, ...props }) {
	return (
		<div
			className={`bg-button border-2 border-button transition-all ease-in-out duration-200 px-5 py-2 sm:px-3 sm:py-1 rounded-full hover:bg-transparent hover:border-button ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}

Button.propTypes = {
	children: PropTypes.any,
	className: PropTypes.any,
};

export default Button;
