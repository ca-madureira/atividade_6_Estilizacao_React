import React from 'react';
import styles from './Button.module.css';

const Button = ({
    children,
    variant = 'solid',
    loading = false,
    disabled = false,
    ...props
}) => {

    const variantClass = styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
    const loadingClass = loading ? styles.buttonLoading : '';

    return (
        <button
            className={`${styles.button} ${variantClass} ${loadingClass}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? 'Carregando...' : children}
        </button>
    );
};

export default Button;
