import React, { FC, useEffect, useState } from "react";
import { ChooseProps } from "../../Interfaces/Interfaces";
import { Button } from "@mui/material";
import Header from "../../shared/Header/Header";
import ChooseBreadcrumbs from "./components/ChooseBreadcrumbs";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Choose.css";

const Choose: FC<ChooseProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentAdventures, setCurrentAdventures] = useState([]);
  const [selectedAdventure, setSelectedAdventure] = useState();
  const fetchData = async () => {
    await fetch("/get-adventures")
      .then((data) => data.json())
      .then((data) => {
        setCurrentAdventures(data["response"]);
        const adventure =
          //@ts-ignore
          data["response"][Math.floor(Math.random() * data["response"].length)];
        setSelectedAdventure(adventure);
      })
      .then(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <ChooseBreadcrumbs />

      <Button variant="contained" href="/">
        Back
      </Button>
      <div className="container">
        {isLoading ? (
          <Box>
            <div>Loading...</div>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <h2>Next Adventure:</h2>

            <h1>
              {
                //@ts-ignore
                selectedAdventure.name
              }
            </h1>
            <div className="button">
              <Button
                variant="outlined"
                color="success"
                href="/"
                style={{ margin: 20 }}
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                color="error"
                style={{ margin: 20 }}
                onClick={fetchData}
              >
                Choose Again
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Choose;
