import { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";
import Header from "../../shared/Header/Header";
import AdventureBreadcrumbs from "./components/AdventureBreadcrumbs/AdventureBreadcrumbs";
import AdventureTable2 from "./components/AdventureTable/AdventureTable2";
import AdventureTable from "./components/AdventureTable/AdventureTable";
import AddAdventures from "./components/AddAdventures/AddAdventures";
import "./Adventures.css";

const Adventures: FC = () => {
  const [currentAdventures, setCurrentAdventures] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("/get-adventures")
        .then((data) => data.json())
        .then((data) => {
          setCurrentAdventures(data["response"]);
        });
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <AdventureBreadcrumbs />
      <Button variant="contained" href="/">
        Back
      </Button>
      <div className="container">
        <h2>Adventures</h2>
        <AddAdventures
        //@ts-ignore
          currentAdventures={currentAdventures}
          setCurrentAdventures={setCurrentAdventures}
        />
        <br></br>
        <div className="adventure-table">
          <AdventureTable
            currentAdventures={currentAdventures}
            setCurrentAdventures={setCurrentAdventures}
          />
        </div>
      </div>
    </>
  );
};

export default Adventures;
