import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FC } from "react";

const ChooseBreadcrumbs: FC = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/choose">
        Choose4Me
      </Link>
    </Breadcrumbs>
  );
};
export default ChooseBreadcrumbs;
