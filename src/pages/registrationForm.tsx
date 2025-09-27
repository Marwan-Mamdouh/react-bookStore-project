import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import type { IUserData } from "../interfaces/interfaces";
import { Grid, TextField } from "@mui/material";

const RegistrationForm = () => {
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // read({ ...userData });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target?.value });
  };

  return (
    <Grid container spacing={1}>
      <Grid size={2} sx={{ m: "auto", width: "400px" }}>
        <TextField
          id="email"
          label="email"
          variant="outlined"
          sx={{ mt: 5, width: "inherit" }}
        ></TextField>
        <TextField
          id="username"
          label="username"
          variant="outlined"
          sx={{ mt: 5, width: "inherit" }}
        ></TextField>
        <TextField
          id="password"
          label="password"
          variant="outlined"
          sx={{ mt: 5, width: "inherit" }}
        ></TextField>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
