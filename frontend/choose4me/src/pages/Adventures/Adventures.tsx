import React, { FC } from "react";
import { Button, Table } from "@mui/material";
import Header from "../../shared/Header/Header";
import AdventureBreadcrumbs from "./components/AdventureBreadcrumbs/AdventureBreadcrumbs";
import AdventureTable from "./components/AdventureTable/AdventureTable";
import AddAdventures from "./components/AddAdventures/AddAdventures";
import "./Adventures.css"

const Adventures: FC = () => {
  return (
    <>
      <Header />
      <AdventureBreadcrumbs />
      <Button variant="contained" href="/">
        Back
      </Button>
      <div className="container">
        <h2>Adventures</h2>
        <AddAdventures />
        <br></br>
        <h3>Planned Adventures</h3>
        <AdventureTable />
      </div>
    </>
  );
};

export default Adventures;
