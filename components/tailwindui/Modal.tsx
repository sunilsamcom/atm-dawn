import * as React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Title from "@mui/material/DialogTitle";
import Content from "@mui/material/DialogContent";
import Actions from "@mui/material/DialogActions";
import { Button } from "@mui/material";

export type ModalAction = {
  label: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
  className?: string;
};

export interface ModalProps extends DialogProps {
  actions?: ModalAction[];
  disableClose?: boolean;
  isFooterBtn?: boolean;
}

const ModalComponent: React.FC<ModalProps> = ({
  children,
  title,
  actions = [{ label: "Cancel" }, { label: "OK" }],
  isFooterBtn = true,
  disableClose,
  ...props
}) => {
  const onClose = React.useCallback(() => {
    props.onClose?.({}, "backdropClick");
  }, [props]);

  return (
    <Dialog {...props}>
      <header className="flex align-middle justify-between">
        {title && <Title className="font-bold pt-3 pb-2">{title}</Title>}
        {!disableClose && (
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
      </header>
      {children && <Content>{children}</Content>}
      {isFooterBtn && actions && (
        <Actions className="flex justify-between">
          {actions.map(
            ({ variant = "primary", label, onClick = onClose, ...rest }) =>
              variant === "primary" ? (
                <Button
                  className="modal-action-button bg-[#7B67E7] text-white"
                  key={label?.toString()}
                  onClick={onClick}
                  {...rest}
                >
                  {label}
                </Button>
              ) : (
                <Button
                  key={label?.toString()}
                  onClick={onClick}
                  className="modal-action-button bg-slate-100"
                  {...rest}
                >
                  {label}
                </Button>
              )
          )}
        </Actions>
      )}
    </Dialog>
  );
};

export default ModalComponent;
