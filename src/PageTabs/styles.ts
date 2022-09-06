import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    tabRoot: {
      color: theme.palette.saleor.main[1],

      "@media (min-width: 600px)": {
        minWidth: "unset",
      },
      "&.Mui-selected": {
        background: theme.palette.saleor.main[6],
      },
      "&:hover": {
        color: theme.palette.saleor.main[3],
      },
      borderRadius: 8,
      minHeight: 40,
      padding: theme.spacing(1, 2),
      textTransform: "unset",
    },
    containerRoot: {
      minHeight: "unset",
    },
    containerFlex: {
      columnGap: theme.spacing(2),
    },
  }),
  {
    name: "PageTab",
  }
);

export default useStyles;
