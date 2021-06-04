import {
  Container,
  ContainerProps,
  makeStyles,
  Theme,
} from "@material-ui/core";
import clsx from "clsx";
import { useContainerStyles } from "hooks/index";
import preact from "preact";
import { getColors, PaletteOrColorsType } from "utils/index";

const useStyles = makeStyles<Theme, PaddingStyles>((theme: Theme) => ({
  container: (props) => ({
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom,
    [theme.breakpoints.down("sm")]: {
      paddingTop: props.paddingTop - 24,
      paddingBottom: props.paddingBottom - 24,
    },
  }),
}));

type PaddingStyles = {
  paddingTop: number;
  paddingBottom: number;
};

export type SectionProps = {
  palette: PaletteOrColorsType;
  // paddingTop?: number | string;
  // paddingBottom?: number | string;
  paddingTop?: number;
  paddingBottom?: number;
  additionalClassName?: string;
} & Required<Pick<ContainerProps, "children">>;

export default function Section({
  palette,
  paddingTop,
  paddingBottom,
  additionalClassName,
  children,
}: SectionProps): preact.VNode {
  const paddings: PaddingStyles = {
    paddingTop: paddingTop || 0,
    paddingBottom: paddingBottom || 0,
  };
  const classes = useStyles(paddings);
  const containerClasses = useContainerStyles((theme: Theme) =>
    getColors(theme, palette)
  );
  return (
    <Container
      disableGutters
      maxWidth={false}
      className={clsx(
        containerClasses.main,
        classes.container,
        additionalClassName
      )}
    >
      {children}
    </Container>
  );
}
