import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {LiveEventList} from "./LiveEventList";
import {RecordedEventList} from "./RecordedEventList";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginLeft: 240
    },
    fab: {
        margin: theme.spacing.unit,
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class EventTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    //todo add react horizontal scrolling
    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <br/>
                <br/>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered variant="fullWidth">
                        <Tab label="Live Events" />
                        <Tab label="Past Events" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><LiveEventList/></TabContainer>}
                {value === 1 && <TabContainer><RecordedEventList/></TabContainer>}

                <Tooltip title="Add New Conference" placement="left">
                    <Fab color="primary" aria-label="Add" className={classes.fab} component={Link} to="/main/newconference">
                         <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
        );
    }
}

export default withStyles(styles)(EventTabs);