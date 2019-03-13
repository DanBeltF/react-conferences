import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import purple from "@material-ui/core/colors/purple";
import teal from "@material-ui/core/colors/teal";
import lime from "@material-ui/core/colors/lime";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },

});

function Questions(props) {
    const { classes } = props;
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" style={{backgroundColor: teal[200]}} >A</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="What can we do about behaviour in workplace?"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                Ali Connors
                            </Typography>
                            {" — at 6:40"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" style={{backgroundColor:purple[700]}} >S</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Is the recognition important in business places?"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                Scott Marl
                            </Typography>
                            {" — at 10:26"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" style={{backgroundColor:lime[600]}} >S</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Is anxiety a big problem that companies have to deal with?"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                Sandra Adams
                            </Typography>
                            {' — at 8:38'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}


export default withStyles(styles)(Questions);