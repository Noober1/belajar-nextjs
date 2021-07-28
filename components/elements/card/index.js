import clsx from 'clsx'
import PropTypes from 'prop-types'

const Card = ({children, className,...props}) => {
    return (
        <div
            className={clsx("transition-all duration-200 p-3 bg-white rounded border border-gray-200 hover:border-gray-400 hover:shadow-lg max-w-md mb-2",className)}
            {...props}
        >
            {children}
        </div>
    )
}

Card.propTypes = {
    className:PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Card
