import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import preact from "preact";
import { useContainerStyles } from "../../hooks";
import ArrowButton from "../arrowButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
      height: "auto",
      borderRadius: 8,
    },
    content: {
      padding: 24,
      borderRadius: 10,
      backgroundColor: theme.palette.green.main,
      color: theme.palette.green.contrastText,
      height: "100%",
      marginBottom: 0,
    },
    spacing: {
      marginTop: 24,
    },
  })
);

type MainTeaserProps = {
  image: string;
  title: string;
  text: string;
  to: string;
  toText: string;
};

export default function MainTeaser({
  image,
  title,
  text,
  to,
  toText,
}: MainTeaserProps): preact.VNode {
  const containerClasses = useContainerStyles((theme: Theme) => {
    return {
      color: theme.palette.green.main,
      backgroundColor: theme.palette.green.contrastText,
    };
  });

  const classes = useStyles();

  return (
    <Container disableGutters className={containerClasses.main}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <img src={image} className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.content}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1" className={classes.spacing}>
              {text}
            </Typography>
            <ArrowButton
              arrow="start"
              variant="outlined"
              palette="green"
              className={classes.spacing}
            >
              {toText}
            </ArrowButton>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
