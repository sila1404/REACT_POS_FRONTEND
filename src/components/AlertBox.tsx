import React, { forwardRef } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import SuccessImg from "../assets/image/success_image.jpg";
import ErrorImg from "../assets/image/error_image.png";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  success: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage?: string
};

export default function AlertBox(props: Props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        TransitionComponent={Transition}
        fullWidth
        maxWidth={"sm"}
        open={props.open}
        onClose={handleClose}
      >
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={props.success ? SuccessImg : ErrorImg}
            alt="success"
            width={"150px"}
          />
          <br />
          <DialogContentText variant="h6" textAlign={"center"}>
            {props.success
              ? "Your request has been successful processed."
              : props.errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
