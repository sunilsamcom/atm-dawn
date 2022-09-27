import * as React from "react";
import { Button, Dialog, Text as Title, Group, Alert } from "@mantine/core";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export type ModalAction = {
  label: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
  className?: string;
};

export interface ModalProps {
  actions?: ModalAction[];
  disableClose?: boolean;
  isFooterBtn?: boolean;
  children?: any;
  title?: any;
  onClose?: any;
  className?: any;
  open: boolean;
  size?: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  children,
  title,
  actions = [{ label: "Cancel" }, { label: "OK" }],
  isFooterBtn = true,
  disableClose,
  open = false,
  ...props
}) => {
  const onClose = React.useCallback(() => {
    props.onClose?.({}, "backdropClick");
  }, [props]);

  return (
    <Dialog opened={open} {...props}>
      <header className="flex align-middle justify-between">
        {title && <Title className="font-bold pt-3 pb-2">{title}</Title>}
        {!disableClose && (
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
      </header>
      {children && <Group>{children}</Group>}
      {isFooterBtn && actions && (
        <Group className="flex justify-between">
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
        </Group>
      )}
    </Dialog>
  );
};

export default ModalComponent;
