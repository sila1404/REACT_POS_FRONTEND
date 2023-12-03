import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  title: string;
  handleChange: (e: any) => void;
  handleClick: () => void;
  buttonText: string
  data: any
};

export default function ProductDialog(props: Props) {
  return (
    <Dialog open={props.open} onClose={() => props.setOpen(false)}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          name="barcode"
          label="Barcode"
          type="text"
          fullWidth
          margin="dense"
          onChange={props.handleChange}
          value={props.data.barcode || ""}
        />
        <TextField
          name="name"
          label="Name"
          type="text"
          fullWidth
          margin="dense"
          onChange={props.handleChange}
          value={props.data.name || ""}
        />
        <TextField
          name="qty"
          label="Quantity"
          type="number"
          fullWidth
          margin="dense"
          onChange={props.handleChange}
          value={props.data.qty || ""}
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          fullWidth
          margin="dense"
          onChange={props.handleChange}
          value={props.data.price || ""}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.handleClick}>
          {props.buttonText}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => props.setOpen(false)}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
