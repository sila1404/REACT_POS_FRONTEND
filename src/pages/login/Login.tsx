import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "@/styles/loginStyles";
import authService from "@/services/authService";
import { useState } from "react";

type Props = {
  setIsAuth: (isAuth: boolean) => void;
};

export default function Login({}: Props) {
  const [loginData, setLoginData] = useState({});

  const handleLogin = async () => {
    try {
      const login = await authService.login(loginData);

      if (login.data.success) {
        localStorage.setItem("token", login.data.data.token);
        // props.setIsAuth(true)
        window.location.reload();
      } else {
        console.log(login);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={styles.root}>
      <Typography variant="h4">Login</Typography>
      <form style={styles.form}>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={styles.button}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
      <Typography variant="h6" margin={2}>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </Typography>
    </Box>
  );
}
