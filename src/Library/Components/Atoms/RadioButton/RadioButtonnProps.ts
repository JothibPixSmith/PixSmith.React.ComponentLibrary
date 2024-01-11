import { OverridableStringUnion } from '@mui/types';
import { Interactables } from "../BaseAtomProps/BaseAtomProps";
import { RadioPropsSizeOverrides } from '@mui/material';

export default interface RadioButtonProps extends Interactables {
    children?: React.ReactNode;
    size?: OverridableStringUnion<'small' | 'medium', RadioPropsSizeOverrides>;
};