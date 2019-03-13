import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player'
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
    },
});

function LiveEventDetail(props) {
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
                            <iframe src="//www.slideshare.net/slideshow/embed_code/key/Ik7sePMpaHdIr4" width="595"
                                height="485" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"
                                style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
                                allowFullScreen/>
                            <div style="margin-bottom:5px"><strong> <a
                                href="//www.slideshare.net/amine789/learn-reactjs" title="Learn react-js"
                                target="_blank">Learn react-js</a> </strong> de <strong><a
                                href="//www.slideshare.net/amine789" target="_blank">C...L, NESPRESSO, WAFAASSURANCE,
                                SOFRECOM ORANGE</a></strong></div>
                        </Paper>
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
                                           label="Text"/>
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(LiveEventDetail);