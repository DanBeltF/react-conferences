import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./NewConference.css";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import moment from "moment";
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';
import DoneIcon from '@material-ui/icons/Done';
import {Link} from "react-router-dom";


export class NewConference extends React.Component {

    constructor(props) {
        super(props);
        this.state = { conferenceName: "", author: "", assistants: "", dueDate: moment() };
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAddNewConference = this.handleAddNewConference.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDateChange(date) {
        this.setState({ dueDate: date });
    }

    handleAddNewConference(e) {

        const newItem = {
            id: Date.now(),
            conferenceName: this.state.conferenceName,
            author: this.state.author,
            assistants: this.state.assistants,
            dueDate: this.state.dueDate.toDate().getTime()
        };

        localStorage.setItem('data', JSON.stringify(newItem));
        console.log(localStorage.getItem('data'));
        this.setState({
            //items: prevState.items.concat(newItem),
            conferenceName: '',
            author: '',
            assistants: '',
            dueDate: ''
        });
    }

    render() {
        return (
            <>
                <Paper className="paper" elevation={4}>
                    <Typography variant="h4" component="h3">
                        New Conference
                    </Typography>
                    <TextField className="textfield"
                               required
                               multiline
                               id="tf-conference"
                               name="conferenceName"
                               label="Conference Name"
                               rowsMax="2"
                               value={this.state.conferenceName}
                               onChange={this.handleChange}
                               margin="normal"
                    />
                    <TextField className="textfield"
                               required
                               id="tf-author"
                               name="author"
                               label="Author"
                               value={this.state.author}
                               onChange={this.handleChange}
                               margin="normal"
                    />
                    <TextField className="textfield"
                               required
                               id="tf-assistants"
                               name="assistants"
                               label="Quantity of Assistants"
                               type="number"
                               inputProps={{ min: "0", max: "50", step: "1" }}
                               value={this.state.status}
                               onChange={this.handleChange}
                               margin="normal"
                    >
                    </TextField>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DateTimePicker style={ {minWidth: 255, marginTop: 20} }
                                    autoOk
                                    disablePast
                                    showTodayButton
                                    id="dp-date"
                                    label="Due Date"
                                    value={this.state.dueDate}
                                    onChange={this.handleDateChange}
                                    margin="normal"
                        />

                    </MuiPickersUtilsProvider>
                    <Fab className="fab" color="secondary" aria-label="Done" component={Link} to="/main/events/">
                        <DoneIcon />
                    </Fab>
                </Paper>
            </>
        );
    }
}