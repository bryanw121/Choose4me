import { FC } from "react";
import { Button } from "@mui/material";
import Header from "../../shared/Header/Header";
import AdventureBreadcrumbs from "./components/AdventureBreadcrumbs/AdventureBreadcrumbs";
import AdventureTable2 from "./components/AdventureTable/AdventureTable2";
import AdventureTable from "./components/AdventureTable/AdventureTable";
import AddAdventures from "./components/AddAdventures/AddAdventures";
import "./Adventures.css";

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
        <div className="adventure-table">
          <AdventureTable />
        </div>
      </div>
    </>
  );
};

export default Adventures;
