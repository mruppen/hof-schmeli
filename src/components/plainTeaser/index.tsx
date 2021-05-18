import {
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import ArrowButton from "components/arrowButton";
import Section from "components/section";
import { LinkType } from "models/models";
import preact, { ComponentChildren } from "preact";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    center: {
      width: "100%",
      textAlign: "center",
    },
  });
});

type PlainTeaserProps = {
  links?: LinkType[];
  children: ComponentChildren;
};

export default function PlainTeaser({
  links,
  children,
}: PlainTeaserProps): preact.VNode {
  const classes = useStyles();
  return (
    <Section paddingBottom={80} paddingTop={80} palette="orange">
      <Grid container spacing={2} justify="center">
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="h2" className={classes.center}>
            {children}
          </Typography>
        </Grid>
        {links &&
          links.map((link) => (
            <Grid item xs={12}>
              <div className={classes.center}>
                <ArrowButton
                  variant="outlined"
                  arrow="start"
                  palette="orangeInverted"
                  to={link.to}
                  documentLink={link.documentLink}
                >
                  {link.label}
                </ArrowButton>
              </div>
            </Grid>
          ))}
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
      </Grid>
    </Section>
  );
}
