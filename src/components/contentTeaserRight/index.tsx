import {
  Container,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import preact, { ComponentChildren } from "preact";
import { useContainerStyles } from "../../hooks";
import { getColors, PaletteOrColorsType } from "../../utils";

const useStyles = makeStyles<Theme, ImageProp>((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: 80,
      paddingBottom: 112,
    },
    padding24: {
      paddingBottom: 24,
    },
    imageContainer: (props) => ({
      overflow: "hidden",
      marginBottom: -217,
      borderRadius: 8,
      height: 637,
      backgroundImage: `url(${props.image})`,
      backgroundPositionX: "-200px",
    }),
    image: {
      borderRadius: 8,
    },
  })
);

type ContentTeaserLeftProps = {
  palette: PaletteOrColorsType;
  title: string;
  image: string;
  containerClassName?: string;
  imageClassName?: string;
  children: ComponentChildren;
};

type ImageProp = {
  image: string;
};

export default function ContentTeaserRight({
  palette,
  title,
  image,
  containerClassName,
  imageClassName,
  children,
}: ContentTeaserLeftProps): preact.VNode {
  const classes = useStyles({ image });
  const theme = useTheme();
  const colors = getColors(theme, palette);
  const containerClasses = useContainerStyles((_) => {
    return {
      color: colors.color,
      backgroundColor: colors.backgroundColor,
    };
  });
  return (
    <Container
      disableGutters
      maxWidth={false}
      className={clsx(
        containerClasses.main,
        classes.container,
        containerClassName
      )}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageContainer}>
            <img src={image} className={clsx(classes.image, imageClassName)} />
          </div>
        </Grid>
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h2" className={classes.padding24}>
            {title}
          </Typography>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
