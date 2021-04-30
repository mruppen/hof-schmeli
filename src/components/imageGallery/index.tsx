import { TeaserModel } from "../../models/models";
import gaestehaus from "../../data/images/gaestehaus.png";
import landschaft from "../../data/images/landschaft.png";
import schweine from "../../data/images/schweine.png";
import wohnwagen from "../../data/images/wohnwagen.png";
import milchHolen from "../../data/images/milchHolen.png";
import tipi from "../../data/images/tipi.png";
import { Container, Theme, makeStyles, useTheme } from "@material-ui/core";
import TeaserRow from "../teaserRow";
import { useContainerStyles } from "../../hooks";
import ArrowButton from "../arrowButton";
import { invert, ColorsType } from "../../utils";
import clsx from "clsx";

const teasers: TeaserModel[] = [{
    imageCaption: "Here comes the caption",
    image: gaestehaus
}, {
    imageCaption: "Here comes the caption",
    image: landschaft
}, {
    imageCaption: "Here comes the caption",
    image: schweine
}, {
    imageCaption: "Here comes the caption",
    image: wohnwagen
}, {
    imageCaption: "Here comes the caption",
    image: milchHolen
}, {
    imageCaption: "Here comes the caption",
    image: tipi
}];

const useStyles = makeStyles({
    margin16: {
        marginTop: 16
    },
    padding80: {
        paddingBottom: 80
    }
})

export default function ImageGallery(): preact.VNode {
    const theme = useTheme();
    const colors: ColorsType = {
        color: theme.palette.blue.main,
        backgroundColor: theme.palette.blue.contrastText
    };

    const classes = useStyles();
    const containerClasses = useContainerStyles((_: Theme) => colors);
    return (<Container disableGutters className={clsx(containerClasses.main, classes.padding80)}>
        <TeaserRow teasers={teasers} palette="blue" />
        <ArrowButton arrow="start" palette={invert(colors)} className={classes.margin16} to="/home" variant="outlined">Mehr dazu</ArrowButton>
    </Container>)
}