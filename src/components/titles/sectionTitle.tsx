import { makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import { IsInsideGrid, TitleProps } from "components/titles/titleProps";
import preact from "preact";

const useStyles = makeStyles<Theme, IsInsideGrid>((theme: Theme) => ({
  title: {
    marginBottom: (props) =>
      props.isInsideGrid ? theme.spacing(1) : theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      marginBottom: (props) => (props.isInsideGrid ? 0 : theme.spacing(2)),
    },
  },
}));

export default function SectionTitle({
  title,
  className,
  isInsideGrid = false,
}: TitleProps): preact.VNode {
  const classes = useStyles({ isInsideGrid });
  return (
    <Typography variant="h2" className={clsx(classes.title, className)}>
      {title}
    </Typography>
  );
}
