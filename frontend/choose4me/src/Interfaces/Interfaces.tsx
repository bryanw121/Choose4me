import { Order } from "../constants/types";

export interface HomeProps {}
export interface ChooseProps {}
export interface Adventure {
  id: number;
  name: string;
  dateAdded: string;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Adventure;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Adventure
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}
