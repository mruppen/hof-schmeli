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
        marginTop: 24
    }
});

export default function ContentTeaserVision(): preact.VNode {
    const theme = useTheme();
    const colors: ColorsType = {
        color: theme.palette.green.contrastText,
        backgroundColor: theme.palette.green.main
    };

    const classes = useStyles();
    const containerClasses = useContainerStyles(_ => colors);
    return (
        <Container disableGutters maxWidth={false} className={clsx(containerClasses.main, classes.container)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h2">
                        Mit Nähe
                    </Typography>
                    <Typography variant="body1" className={classes.margin24}>
                    Wo Kinder, Erwachsene und Tiere sich begegnen und wertschätzende und tragende Beziehungen aufbauen können. Alle gleichwertig sind und authentisch sein dürfen. Das Miteinander in der Gemeinschaft wertschätzend statt bewertend ist – auf allen Ebenen.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h2">
                        Mit Vertrauen
                    </Typography>
                    <Typography variant="body1" className={classes.margin24}>
                    Wo Herausforderungen mutig und vertrauensvoll angegangen werden können. Mit gemeinsamer Stärke ein «Über-sich-hinauswachsen» erfahren werden kann. Unstimmigkeiten angesprochen werden und Konflikte gewaltfrei gelöst werden.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h2">
                    Mit Freiheit und Verantwortung
                    </Typography>
                    <Typography variant="body1" className={classes.margin24}>
                    Wo ein jeder Raum findet, seine Persönlichkeit weiterzuentwickeln und sein Potenzial zu entfalten. Lern- und Lebensfreude entfacht, erhalten und gelebt wird. Kinder auf das Leben (weiterführende Schulen, Lehren, Ausbildungen, Beruf, Berufung) vorbereitet werden.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}