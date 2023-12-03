import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "@/styles/loginStyles";

type Props = {}

export default function Register({}: Props) {
  return (
    <Box sx={styles.root}>
      <Typography variant="h4">Register</Typography>
      <form style={styles.form}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
        />
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={styles.button}
        >
          Login
        </Button>
      </form>
      <Typography variant="h6" margin={2}>Already have an account? <Link to='/login'>Login</Link></Typography>
    </Box>
  )
}