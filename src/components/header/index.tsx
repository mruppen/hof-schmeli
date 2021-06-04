import {
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import MainNavigation from "components/mainNavigation";
import Section from "components/section";
import HeaderTitle from "components/titles/headerTitle";
import preact from "preact";
import { useHeaderStyles } from "src/hooks";
import { getColors, PaletteOrColorsType } from "utils/index";
import { customLg } from "src/data/constants";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: -8,
    },
  },
  subtitle: {
    marginTop: 48,
    [theme.breakpoints.down(customLg)]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 24,
    },
  },
  lead: {
    marginTop: 18,
  },
  image: {
    visibility: "hidden",
    [theme.breakpoints.down("sm")]: {
      visibility: "visible",
    },
  },
}));

type HeaderProps = {
  activeRoute:
    | "/"
    | "eltern"
    | "schule"
    | "vision"
    | "geschichten"
    | "gemeinschaft";
  height: number;
  image: string;
  lead?: string;
  palette: PaletteOrColorsType;
  subTitle: string;
};

export default function Header({
  activeRoute,
  height,
  image,
  lead,
  palette,
  subTitle,
}: HeaderProps): preact.VNode {
  const isSmOrSmaller = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const classes = useStyles();
  const theme = useTheme();
  const colors = getColors(theme, palette);
  const headerClasses = useHeaderStyles({
    backgroundColor: colors.backgroundColor,
    height: height,
    image: image,
  });

  return (
    <Section
      palette={colors}
      additionalClassName={clsx(headerClasses.container, classes.container, {
        [headerClasses.containerImage]: !isSmOrSmaller,
      })}
    >
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <MainNavigation palette={palette} route={activeRoute} />
        </Grid>
        <Grid xs={12} item>
          <HeaderTitle />
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.content}>
        <Hidden smDown>
          <Grid item md={2} />
        </Hidden>
        <Grid xs={12} md={8} item>
          <Typography variant="h2" className={classes.subtitle}>
            {subTitle}
          </Typography>
          {lead && (
            <Typography variant="h4" className={classes.lead}>
              {lead}
            </Typography>
          )}
          {isSmOrSmaller && (
            <img
              src={image}
              className={clsx(classes.image, headerClasses.image)}
            />
          )}
        </Grid>
      </Grid>
    </Section>
  );
}
