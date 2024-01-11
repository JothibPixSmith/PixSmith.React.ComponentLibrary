import { Interactables } from "../BaseAtomProps/BaseAtomProps";

export default interface Props extends Interactables {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
};