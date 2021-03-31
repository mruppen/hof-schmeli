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
      [theme.breakpoints.up("sm")]: {
        paddingTop: 80 - theme.spacing(1),
        paddingBottom: 80 - theme.spacing(1),
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 33.5,
        paddingRight: 33.5,
        paddingTop: 56 - theme.spacing(1),
        paddingBottom: 56 - theme.spacing(1),
      },
    },

    content: {
      [theme.breakpoints.up("sm")]: {
        marginLeft: 40,
        paddingTop: 80 - theme.spacing(1),
        paddingBottom: 80 - theme.spacing(1),
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: 0 - theme.spacing(1),
        paddingBottom: 56 - theme.spacing(1),
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
  const containerClasses = useContainerStyles((theme: Theme) => {
    return {
      backgroundColor: theme.palette.blue.main,
      color: theme.palette.common.white,
    };
  });
  const classes = useStyles();

  return (
    <Container className={containerClasses.main} disableGutters>
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
