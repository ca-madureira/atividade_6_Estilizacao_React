
import './Button.css';

const Button = ({
    children,
    variant = 'solid',
    loading = false,
    disabled = false,
    ...props
}) => {
    const baseClass = 'button';
    const variantClass = `button--${variant}`;
    const loadingClass = loading ? 'button--loading' : '';

    return (
        <button
            className={`${baseClass} ${variantClass} ${loadingClass}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? 'Carregando...' : children}
        </button>
    );
};

export default Button;
