import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import preact from "preact";
import ArrowButton from "../arrowButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.blue.main,
      color: theme.palette.common.white,
      [theme.breakpoints.up("sm")]: {
        width: 1440,
        maxWidth: 1440,
        paddingLeft: 188,
        paddingRight: 188,
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 24,
        paddingRight: 24,
        width: 375,
        maxWidth: 375,
      },
    },

    image: {
      [theme.breakpoints.up("sm")]: {
        paddingTop: 80,
        paddingBottom: 80,
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 33.5,
        paddingRight: 33.5,
        paddingTop: 56,
        paddingBottom: 56,
      },
    },

    content: {
      //   display: flex;
      //   flex-direction: column;
      //   align-items: flex-start;
      [theme.breakpoints.up("sm")]: {
        marginLeft: 40,
        paddingTop: 80,
        paddingBottom: 80,
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: 0,
        paddingBottom: 56,
        marginLeft: 0,
      },
    },

    spacing: {
      marginTop: 20,
    },
  })
);

type QuoteTeaserProps = {
  image: string;
  title: string;
  person: string;
};

export default function QuoteTeaser({
  image,
  title,
  person,
}: QuoteTeaserProps): preact.VNode {
  const classes = useStyles();
  return (
    <Container className={classes.container} disableGutters>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <div className={classes.image}>
            <img src={image} />
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <div className={classes.content}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h5" className={classes.spacing}>
              {person}
            </Typography>
            <ArrowButton
              variant="outlined"
              palette="blue"
              arrow="start"
              className={classes.spacing}
            >
              Mehr informationen
            </ArrowButton>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
