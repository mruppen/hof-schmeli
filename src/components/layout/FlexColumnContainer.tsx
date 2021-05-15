import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import preact, { ComponentChildren } from "preact";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

type FlexColumnContainerProps = {
  className?: string;
  children: ComponentChildren;
};

export default function FlexColumnContainer({
  className,
  children,
}: FlexColumnContainerProps): preact.VNode {
  const classes = useStyles();
  return <div className={clsx(classes.container, className)}>{children}</div>;
}
