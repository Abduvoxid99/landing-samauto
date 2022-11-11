import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStyles = makeStyles(() => ({
  paper: {
    boxShadow: "0px 1px 16px rgba(0, 0, 0, 0.1)",
    width: rem(232),
    top: `${rem(55)}`,
  },
}));
