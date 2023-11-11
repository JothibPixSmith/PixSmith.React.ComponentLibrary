import React from "react";
type Props = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
};
declare const Button: React.FC<Props>;
export default Button;
