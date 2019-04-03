import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';

export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', showPassword: false };
        localStorage.setItem('isLoggedIn', 'false');
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleAuthentication(e) {
        if (this.state.username === localStorage.getItem('username') && this.state.password === localStorage.getItem('password')) {
            localStorage.setItem('isLoggedIn', 'true');
        }

        var apiBaseUrl = "http://localhost:3000/api/";
        var self = this;
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                    console.log("Login successfull");
                }
                else if(response.data.code == 204){
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else{
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleClickShowPassword() {
        const changeShow = !this.state.showPassword;
        this.setState({
            showPassword: changeShow
        });
    };

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <br />
                        <Typography variant="headline" style={{fontSize:33}} >Sign in</Typography>
                        <br />
                        <DonutSmallIcon style={{fontSize: '60px', color: 'gray'}} />
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    value={this.state.username}
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.handleUsernameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={this.state.password}
                                    autoComplete="current-password"
                                    onChange={this.handlePasswordChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
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
                                disabled={!this.validateForm()}
                                component={Link}
                                to={"/main"}
                                onClick={this.handleAuthentication}
                            >
                                LOGIN
                            </Button>

                            <br />
                            <br />

                            <Typography>Don&#39;t have an account? <Link to="/register">Create one</Link>.</Typography>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}