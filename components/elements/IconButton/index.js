const IconButton = ({children, ...props}) => {
    return (
        <button
            className="p-2 m-1 transition-colors rounded-full text-gray-600 focus:outline-none focus:text-white focus:bg-gray-900 hover:bg-gray-700 hover:text-white"
            {...props}
        >
            {children}
        </button>
    )
}

export default IconButton
