import * as React from "react";
import {
  Button,
  Modal,
  Text as Title,
  Group,
} from "@mantine/core";

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
  withCloseButton?:boolean;
}

const ModalComponent: React.FC<ModalProps> = ({
  children,
  title,
  withCloseButton,
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
    <Modal
      opened={open}
      onClose={onClose}
      withCloseButton={disableClose}
      title={<Title className="font-bold">{title}</Title>}
      size="50%"
      {...props}
    >
      {children && children}
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
                  className="modal-action-button bg-slate-100 text-gray-500"
                  {...rest}
                >
                  {label}
                </Button>
              )
          )}
        </Group>
      )}
    </Modal>
  );
};

export default ModalComponent;
