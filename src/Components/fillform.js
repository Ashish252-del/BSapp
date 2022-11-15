import { CardContent } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../App.css";

export const Fillsellform = () => {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Fill your details</h3>
      <Card className="buycard mx-auto ">
        <CardContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <div className="row-col-6">
              <TextField
                required
                id="outlined-required"
                label="First Name"
                width="100%"
                defaultValue="abc"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                  borderColor: " #008E97",
                  color: "GrayText",
                }}
              />
              <TextField
                id="outlined-required"
                label="Last Name"
                defaultValue="abc"
              />
            </div>
            <div className="row-col-6">
              <TextField
                required
                id="outlined-number"
                label="Mobile Number"
                //   type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id="filled-required"
                label="e-mail Id"
                defaultValue="abc"
                variant="filled"
              />
            </div>

            <div className="row">
              <div className="col-6">
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                />
                <TextField
                  required
                  id="outlined-number"
                  label="Price"
                  //   type="number"
                  helperText="Price(in Rupees) on which you want to sell your book(s)"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="col-6">
                <TextField
                  id="outlined-required"
                  label="Book Name"
                  defaultValue="abc"
                />
              </div>
            </div>
            <div>
            <TextField
          id="standard-helperText"
          label="Details"
         placeholder="details about book"
          helperText="Like book's edition"
          variant="standard"
        />
              {/* <TextField
                id="filled"
                label="About You"
                defaultValue="abc"
                variant="filled"
              /> */}
            </div>
            <div>
              {/* <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        
        /> */}
             
              <div className="row mx-auto">
               
                  <Button variant="contained" component="label" style={{margin:"3px"}}>
                    Upload File
                    <input type="file" hidden />
                  </Button>
               
                  <Button variant="contained" color="success">
                    Success
                  </Button>
               
              </div>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};
