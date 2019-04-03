import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Register.css";
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {Link} from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            role: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick(event){
        var apiBaseUrl = "http://localhost:3000/api/";
        console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password, this.state.role);
        var self = this;
        var payload={
            "first_name": this.state.first_name,
            "last_name":this.state.last_name,
            "email":this.state.email,
            "password":this.state.password,
            "role": this.state.role
        }
        axios.post(apiBaseUrl+'/register', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                    var loginmessage = "Not Registered yet. Go to registration";
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <br />
                        <Typography variant="headline" style={{fontSize:33}} >Register</Typography>
                        <br />
                        <AccountCircleIcon style={{fontSize: '60px', color: 'gray'}} />
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="fname">First Name</InputLabel>
                                <Input
                                    id="fname"
                                    name="first_name"
                                    value={this.state.first_name}
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="lname">Last Name</InputLabel>
                                <Input
                                    id="lname"
                                    name="last_name"
                                    value={this.state.last_name}
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    id="password"
                                    value={this.state.password}
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input
                                    name="password"
                                    id="passwordC"
                                    value={this.state.password}
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" component="fieldset" >
                                <FormLabel component="legend">Role</FormLabel>
                                <RadioGroup
                                    aria-label="Role"
                                    name="role"
                                    value={this.state.role}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel value="viewer" name="viewer" control={<Radio />} label="Viewer" />
                                    <FormControlLabel value="speaker" name="speaker" control={<Radio />} label="Speaker" />
                                </RadioGroup>
                            </FormControl>


                            <br />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                component={Link}
                                to={"/"}
                                onClick={this.handleAuthentication}
                            >
                                REGISTER
                            </Button>

                            <br />
                            <br />

                            <Typography>Already have an account? <Link to="/">Login</Link>.</Typography>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;