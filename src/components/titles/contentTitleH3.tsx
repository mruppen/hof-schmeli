import { makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import { IsInsideGrid, TitleProps } from "components/titles/titleProps";
import preact from "preact";

const useStyles = makeStyles<Theme, IsInsideGrid>((theme: Theme) => ({
  title: {
    marginBottom: (props) =>
      props.isInsideGrid ? theme.spacing(0.5) : theme.spacing(2.5),
  },
}));

export default function ContentTitleH3({
  title,
  className,
  isInsideGrid = false,
}: TitleProps): preact.VNode {
  const classes = useStyles({ isInsideGrid });
  return (
    <Typography variant="h3" className={clsx(classes.title, className)}>
      {title}
    </Typography>
  );
}
