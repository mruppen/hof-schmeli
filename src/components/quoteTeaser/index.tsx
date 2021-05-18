import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import clsx from "clsx";
import { useContainerStyles } from "hooks/index";
import preact, { ComponentChildren } from "preact";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: 80,
      paddingBottom: 80,
    },
    imageContainer: {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
    image: {
      width: "100%",
      marginTop: "auto",
      marginBottom: "auto",
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
  children: ComponentChildren;
};

export default function QuoteTeaser({
  image,
  children,
}: QuoteTeaserProps): preact.VNode {
  const containerClasses = useContainerStyles((theme: Theme) => {
    return {
      backgroundColor: theme.palette.yellow.main,
      color: theme.palette.yellow.contrastText,
    };
  });
  const classes = useStyles();

  return (
    <Container
      className={clsx(containerClasses.main, classes.container)}
      disableGutters
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <div className={classes.imageContainer}>
            <img src={image} className={classes.image} />
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
