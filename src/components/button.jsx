// eslint-disable-next-line react/prop-types
export const Button = ({ children, onClick, color, size = 'md', rounded = 'lg' }) => {
    let buttonClassName = null;

    switch(color) {
        case 'blue':
            buttonClassName = "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500";
            break;
        case 'red':
            buttonClassName = "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none focus:ring-red-300 font-medium text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600";
            break;
        case 'green':
            buttonClassName = "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 font-medium text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600";
            break;
        case 'gray':
            buttonClassName = "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600";
            break;
        case 'yellow':
            buttonClassName = "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-yellow-300 font-medium text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400";
            break;
        case 'purple':
            buttonClassName = "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500";
            break;
        case 'pink':
            buttonClassName = "text-pink-700 hover:text-white border border-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-pink-300 font-medium text-center me-2 mb-2 dark:border-pink-400 dark:text-pink-400 dark:hover:text-white dark:hover:bg-pink-500";
            break;
        case 'orange':
            buttonClassName = "text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-orange-300 font-medium text-center me-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500";
            break;

        default:
            buttonClassName = "text-black hover:text-white border border-black hover:bg-black focus:outline-none focus:ring-gray-300 font-medium text-center me-2 mb-2";
            break;
    }

    switch(size) {
        case 'sm':
            buttonClassName += ' px-3 py-2 text-xs';
            break;
        case 'md':
            buttonClassName += ' px-5 py-2.5 text-sm';
            break;
        case 'lg':
            buttonClassName += ' px-5 py-3 text-base';
            break;
    }

    switch(rounded) {
        case 'sm':
            buttonClassName += ' rounded';
            break;
        case 'md':
            buttonClassName += ' rounded-md';
            break;
        case 'lg':
            buttonClassName += ' rounded-lg';
            break;
        case 'full':
            buttonClassName += ' rounded-full';
            break;
    }

    return (
        <button
            type="button"
            className={buttonClassName}
            onClick={onClick}
        >
            {children}
        </button>
    );
};


