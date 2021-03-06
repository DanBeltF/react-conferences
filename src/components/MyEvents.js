import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RecordedEventCard from "./RecordedEventCard";
import {RecordedEventList} from "./RecordedEventList";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function MyEvents(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    Here are the conferences you are following
                </Typography>
                <Typography component="p">
                    Tap for more info
                </Typography>
                <RecordedEventList/>
            </Paper>
        </div>
    );
}


export default withStyles(styles)(MyEvents);