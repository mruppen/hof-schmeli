import { makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import preact from "preact";
import { IsInsideGrid, TitleProps } from "./titleProps";

const useStyles = makeStyles<Theme, IsInsideGrid>((theme: Theme) => ({
  title: {
    marginBottom: (props) =>
      props.isInsideGrid ? theme.spacing(1) : theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      marginBottom: (props) =>
        props.isInsideGrid ? -theme.spacing(0.5) : theme.spacing(1.5),
    },
  },
}));

export default function ContentTitleH4({
  title,
  className,
  isInsideGrid = false,
}: TitleProps): preact.VNode {
  const classes = useStyles({ isInsideGrid });
  return (
    <Typography variant="h4" className={clsx(classes.title, className)}>
      {title}
    </Typography>
  );
}
