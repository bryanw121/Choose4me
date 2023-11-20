import React, { FC, useState, KeyboardEvent } from "react";
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
      await fetch("/add-adventure/" + input).then(async (data) => {
        console.log(data.json());
        await fetch("/get-adventures")
          .then((data) => data.json())
          .then((data) => {
            setCurrentAdventures(data["response"]);
            console.log(data["response"]);
          });
      });
    };
    addAdventure();
    setInput("");
  };
  const handleKeyDown = (event: any) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      handleClick();
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
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
          onKeyDown={handleKeyDown}
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
