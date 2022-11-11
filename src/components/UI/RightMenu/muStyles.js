import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    "& .MuiPaper-root": {
      borderRadius: 0,
    },
  },
  list: {
    width: "50vw",
    "@media (max-width: 600px)": {
      width: "100vw",
      height: "100vh",
    },
  },
  fullList: {
    width: "auto",
  },
});
