import React, { FC } from "react";
import { ChooseProps } from "../../Interfaces/Interfaces";
import { Button } from "@mui/material";
import Header from "../../shared/Header/Header";
import ChooseBreadcrumbs from "./components/ChooseBreadcrumbs";
import "./Choose.css";

const Choose: FC<ChooseProps> = () => {
  return (
    <>
      <Header />
      <ChooseBreadcrumbs />
      
      <Button variant="contained" href="/">
        Back
      </Button>
      <div className="container">
        <h2>Next Adventure:</h2>
        <h1>Going to a coffee shop</h1>
        <div className="button">
          <Button
            variant="outlined"
            color="success"
            href="/"
            style={{ margin: 20 }}
          >
            Confirm
          </Button>
          <Button variant="outlined" color="error" style={{ margin: 20 }}>
            Choose Again
          </Button>
        </div>
      </div>
    </>
  );
};

export default Choose;
