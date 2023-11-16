import React, { FC, useState } from "react";
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
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };
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
