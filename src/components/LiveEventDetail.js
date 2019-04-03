import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Questions from "./Questions";
import TextField from "@material-ui/core/es/TextField/TextField";

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

function LiveEventDetail(props) {
    const { classes } = props;
//todo include embeded presentation
    return (
        <div>
            <br />
            <br />
            <br />
            <Paper className={classes.root} elevation={1}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography >
                                Vote for the contents
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography>
                                Most popular questions
                                <Questions/>
                                Participate:
                                <TextField id="text"
                                           label="Question to add"/>
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(LiveEventDetail);