import {
  Container,
  ContainerProps,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import clsx from "clsx";
import preact from "preact";
import { useContainerStyles } from "../../hooks";
import { getColors, PaletteOrColorsType } from "../../utils";

const useStyles = makeStyles<Theme, PaddingStyles>(() =>
  createStyles({
    container: (props) => ({
      paddingTop: props.paddingTop,
      paddingBottom: props.paddingBottom,
    }),
  })
);

type PaddingStyles = {
  paddingTop: number | string;
  paddingBottom: number | string;
};

export type SectionProps = {
  palette: PaletteOrColorsType;
  paddingTop?: number | string;
  paddingBottom?: number | string;
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
