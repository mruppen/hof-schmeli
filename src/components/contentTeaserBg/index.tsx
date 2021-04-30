import preact from "preact";
import { Container, useTheme, Grid, Hidden, Typography, makeStyles } from "@material-ui/core";
import { ColorsType, invert } from "../../utils";
import { useContainerStyles } from "../../hooks";
import ArrowButton from "../arrowButton";
import clsx from "clsx";

const useStyles = makeStyles({
    container: {
        paddingTop: 80,
        paddingBottom: 80
    },
    margin24: {
        marginBottom: 24
    }
});

export default function ContentTeaserBg(): preact.VNode {
    const theme = useTheme();
    const colors: ColorsType = {
        color: theme.palette.blue.main,
        backgroundColor: theme.palette.blue.contrastText
    };

    const classes = useStyles();
    const containerClasses = useContainerStyles(_ => colors);
    return (
        <Container disableGutters maxWidth={false} className={clsx(containerClasses.main, classes.container)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <Typography variant="h2" className={classes.margin24}>
                        Die Genossenschaft «Schule Bauernhof Schmeli»
                    </Typography>
                    <Typography variant="body1" className={classes.margin24}>
                        Wir sind nicht profitorientiert (keine GmbH oder AG), sondern genossenschaftlich. Bei uns gibt es auch keine Chefetage oder andere hierarchische Strukturen. Wir agieren und entscheiden gemeinschaftlich, direkt vor Ort, in der betreffenden Funktion.<br /><br />Die Mitglieder der Genossenschaft haben zur Gründung dieser Schule beigetragen und tragen diese mit.
                    </Typography>
                    <ArrowButton arrow="start" palette={invert(colors)} to="/home" variant="outlined">Mehr dazu</ArrowButton>
                </Grid>
                <Grid item xs={false} sm={2}>
                    <Hidden />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography variant="h2" className={classes.margin24}>
                        Der Förderverein «Schule Bauernhof Schmeli»
                    </Typography>
                    <Typography variant="body1" className={classes.margin24}>
                        Unser Förderverein hat zum Sinn und Zweck, die Schule Bauernhof Schmeli finanziell, ideell und tatkräftig zu unterstützen. Alle Eltern unserer Schulkinder treten dem Verein verpflichtend bei.
                    </Typography>
                    <ArrowButton arrow="start" palette={invert(colors)} to="/home" variant="outlined">Mehr über die Schule erfahren</ArrowButton>
                </Grid>
            </Grid>
        </Container>
    );
}