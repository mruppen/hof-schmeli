import preact, { ComponentChildren } from "preact";
import { Container, Theme, Grid, Typography, Hidden, makeStyles, createStyles, useTheme } from "@material-ui/core";
import { useContainerStyles } from "../../hooks";
import clsx from "clsx";
import { PaletteOrColorsType, getColors } from "../../utils";

const useStyles = makeStyles(() => createStyles({
    container: {
        paddingTop: 80,
        paddingBottom: 112
    },
    padding24: {
        paddingBottom: 24
    },
    image: {
        borderRadius: 8,
        width: "100%"
    }
}))

type ContentTeaserLeftProps = {
    palette: PaletteOrColorsType;
    title: string;
    image: string;
    containerClassName?: string;
    imageClassName?: string;
    children: ComponentChildren;
}

export default function ContentTeaserLeft({ palette, title, image, containerClassName, imageClassName, children }: ContentTeaserLeftProps): preact.VNode {
    const classes = useStyles();
    const theme = useTheme();
    const colors = getColors(theme, palette);
    const containerClasses = useContainerStyles(_ => {
        return {
            color: colors.color,
            backgroundColor: colors.backgroundColor
        }
    });
    return (
        <Container disableGutters maxWidth={false} className={clsx(containerClasses.main, classes.container, containerClassName)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <Typography variant="h2" className={classes.padding24}>
                        {title}
                    </Typography>
                    {children}
                </Grid>
                <Grid item xs={false} sm={1}>
                    <Hidden />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={image} className={clsx(classes.image, imageClassName)} />
                </Grid>
            </Grid>
        </Container>
    )
}