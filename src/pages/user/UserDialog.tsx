import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material'

type Props = {
  title: string
  buttonText: string
  open: boolean
  setOpen: (val: boolean) => void
  data: any
  handleChange: (e: any) => void
  handleClick: () => void
}

export default function UserDialog(props: Props) {
  return (
    <Dialog open={props.open} onClose={() => props.setOpen(false)}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField 
          autoFocus
          name="username"
          label="Username"
          type="text"
          fullWidth
          margin="dense"
          onChange={props.handleChange}
          value={props.data.username}
        />
        <TextField 
          autoFocus
          name="password"
          label="Password"
          type="password"
          fullWidth
          margin="dense"
          onChange={props.handleChange}
          value={props.data.password}
        />
        <TextField 
          name="age"
          label="Age"
          type="number"
          fullWidth
          margin="dense"
          onChange={props.handleChange}
          value={props.data.age}
        />
        <TextField 
          name="address"
          label="Address"
          type="text"
          fullWidth
          margin="dense"
          onChange={props.handleChange}
          value={props.data.address}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='primary' onClick={props.handleClick}>{props.buttonText}</Button>
        <Button variant='contained' color='error' onClick={() => props.setOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}