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
import DonutSmallIcon from "./Login";
import {Link} from "react-router-dom";

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick(event){
        var apiBaseUrl = "http://localhost:3000/api/";
        console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
        var self = this;
        var payload={
            "first_name": this.state.first_name,
            "last_name":this.state.last_name,
            "email":this.state.email,
            "password":this.state.password
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
                            <br />
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