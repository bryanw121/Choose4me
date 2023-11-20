import React, { FC, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./AddAdventures.css";

const AddAdventures: FC = ({
  //@ts-ignore
  currentAdventures,
  //@ts-ignore
  setCurrentAdventures,
}) => {
  const [input, setInput] = useState("");
  const handleClick = () => {
    const addAdventure = async () => {
      await fetch("/add-adventure/" + input).then((data) => {
        console.log(data.json());
      });
    };
    addAdventure();
    setInput("");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetch("/get-adventures")
        .then((data) => data.json())
        .then((data) => {
          setCurrentAdventures(data["response"]);
          console.log(data["response"]);
        });
    };
    fetchData().catch(console.error);
  }, [currentAdventures]);
  return (
    <>
      <div>
        <TextField
          variant="outlined"
          id="adventure"
          placeholder="Add an adventure!"
          value={input}
          onChange={handleChange}
        ></TextField>
      </div>
      <div>
        <Button variant="contained" onClick={handleClick}>
          Add Adventure
        </Button>
      </div>
    </>
  );
};

export default AddAdventures;
function setState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
