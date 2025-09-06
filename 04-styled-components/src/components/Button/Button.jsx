import { StyledButton } from './Button.styles';

export const Button = ({ children, variant = 'solid', ...props }) => {
    return (
        <StyledButton variant={variant} {...props}>
            {children}
        </StyledButton>
    );
};
