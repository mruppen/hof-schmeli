import preact from "preact";
import { Container, useTheme, makeStyles } from "@material-ui/core";
import { useContainerStyles } from "../../hooks";
import { ColorsType } from "../../utils";
import clsx from "clsx";

const useStyles = makeStyles({
    container: {
        paddingTop: 112
    }
})

export default function TeachersList(): preact.VNode {
    const theme = useTheme();
    const colors: ColorsType ={
        color: theme.palette.yellow.contrastText,
        backgroundColor: theme.palette.yellow.main
    }
    const containerClasses = useContainerStyles(_ => colors);
    const classes = useStyles();

    return(<Container disableGutters maxWidth={false} className={clsx(containerClasses.main, classes.container)}>
        
    </Container>);
}