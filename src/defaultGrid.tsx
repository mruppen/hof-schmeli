import { Grid, GridProps } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export type ContainerProps = Omit<GridProps, Breakpoint>;

export function Container({ children, ...props }: ContainerProps) {
  return (
    <Grid container spacing={2} {...props}>
      {children}
    </Grid>
  );
}
