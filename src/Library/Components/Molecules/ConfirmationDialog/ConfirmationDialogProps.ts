import { ReactNode } from "react";

export default interface ConfirmationDialogProps {
    isOpen: boolean;
    title?: ReactNode;
    body?: ReactNode;
    isOptionalModal?: boolean;
    confirmButtonText: string;
    cancelButtonText: string;
    onConfirm: React.MouseEventHandler<HTMLButtonElement>;
    onCancel: React.MouseEventHandler<HTMLButtonElement>;
}