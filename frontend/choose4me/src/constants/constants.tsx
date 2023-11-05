import { HeadCell, Adventure } from "../Interfaces/Interfaces";

export const placeholder = {};
export const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Adventure name",
  },
  {
    id: "dateAdded",
    numeric: false,
    disablePadding: true,
    label: "Date Added",
  },
];

export const mockRows = [
  [1, "Go shopping at the mall", "01/02/2023"],
  [2, "Go hiking", "10/21/2023"],
  [3, "Eat at a restaurant", "02/04/2017"],
  [4, "Go to the movies", "03/25/2019"],
  [5, "Watch a movie at home", "06/17/2020"],
];
