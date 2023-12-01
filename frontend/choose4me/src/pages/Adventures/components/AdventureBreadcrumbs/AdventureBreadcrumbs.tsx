import { Breadcrumbs, Link } from "@mui/material";
import { FC } from "react";

const AdventureBreadcrumbs: FC = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/adventures">
        Adventures
      </Link>
    </Breadcrumbs>
  );
};
export default AdventureBreadcrumbs;
