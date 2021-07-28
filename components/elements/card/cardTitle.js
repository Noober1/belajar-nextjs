import clsx from 'clsx';
import PropTypes from 'prop-types';

const CardTitle = ({title, className}) => {
    return <h3 className={clsx("text-2xl font-semibold capitalize mb-3", className)}>{title}</h3>
}

CardTitle.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default CardTitle
