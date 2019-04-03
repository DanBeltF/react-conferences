import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player'
import Grid from '@material-ui/core/Grid';
import Questions from "./Questions";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginLeft: 240
    },
});

function RecordedEventDetail(props) {
    const { classes } = props;

    return (
        <div>
            <br />
            <br />
            <br />
            <Paper className={classes.root} elevation={1}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=kARkOdRHaj8'
                                width='100%'
                                height='400px'
                                playing />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography >
                                Related conferences
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography>
                                Most popular questions
                                <Questions/>
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(RecordedEventDetail);