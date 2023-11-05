import React, { FC, useEffect, useState } from "react";
import { HomeProps } from "../../Interfaces/Interfaces";
import Button from "@mui/material/Button";
import "./Home.css";
import Header from "../../shared/Header/Header";

const Home: FC<HomeProps> = () => {
  const [emptyAdventures, setEmptyAdventures] = useState(false);
  useEffect(() => {
    //TODO: query db to see if there are currently any entries
  });
  return (
    <>
      <Header />
      <div className="container">
        <h3>Can't make a decision?</h3>
        <p>Click the button below so you don't have to</p>
        <Button variant="outlined" href="/choose" disabled={emptyAdventures}>
          Choose4me
        </Button>
      </div>
      {emptyAdventures ? (
        <div className="errorMessage">
          It looks like no adventures have been added yet! To add an adventure,
          click the "Edit adventures!" button.
        </div>
      ) : (
        <></>
      )}
      <div className="container">
        <p>Edit your current adventures</p>
        <Button variant="outlined" href="/adventures">
          Edit adventures!
        </Button>
      </div>
    </>
  );
};

export default Home;
