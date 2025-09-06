export const Button = ({ children, variant = 'solid', onClick, className = '', ...props }) => {
    const baseStyles = 'px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out';

    const variants = {
        solid: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
        ghost: 'text-blue-600 hover:bg-blue-100',
    };

    const finalClass = `${baseStyles} ${variants[variant] || variants.solid} ${className}`;

    return (
        <button className={finalClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};
