import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  darkmodeicon: {
    marginLeft: "20px",
  },
  icon: {
    marginRight: "20px",
    cursor: "pointer",
  },

  cardGrid: {
    padding: "70px 0 5px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  CardMedia: {
    paddingTop: "56.25%",
  },
  CardContent: {
    flexGrow: 1,
  },
  footer: {
    paddingTop: "20px",
  },
}));

export default useStyles;
