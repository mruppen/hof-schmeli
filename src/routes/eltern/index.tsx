import { Container, createStyles, makeStyles } from "@material-ui/core";
import preact from "preact";
import Footer from "../../components/footer";
import HeaderEltern from "../../components/headers/eltern";

const useStyles = makeStyles(() =>
  createStyles({
    margin20: {
      marginBottom: 20,
    },
    margin92: {
      marginTop: 92,
    },
    margin100: {
      marginTop: -200,
    },
    margin112: {
      marginTop: 112,
    },
  })
);

export default function Eltern(): preact.VNode {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false}>
      <HeaderEltern />
      <Footer />
    </Container>
  );
}
