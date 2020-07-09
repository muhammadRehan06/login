import React, { Component } from 'react';
import { Input } from '../input/Input';
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[
                {id: 0, name: "admin", pass: "admin"},
                {id: 1, name: "rehan", pass: "1234"},
                {id: 2, name: "adil", pass: "1234"}
            ],
            isAuth: false,
            currentUser: null,
            errors:{
                hasError:false,
                errorObj:{}
            },
            name:"",
            pass:""
          }
    }
    onSubmit = (ev) =>{
        ev.preventDefault();
        const {users, errors, name, pass} = this.state;
       var currentUser = users.filter((user) => {
            return user.name === name && user.pass === pass
        })
        if(currentUser.length){
            // this.setState({currentUser:currentUser[0]})
        }

    }
    render() { 
        const {name, errors, pass} = this.state;
        return (
            <div >
                <div className="login-form-wrapper">
                <form onSubmit={(ev) => this.onSubmit(ev)}>
                    <h1>Login</h1>
                <Input
                    type='text'
                    value={name}
                    name="name"
                    label="Username"
                    id="name"
                    placeholder="Enter Your Name Here"
                    onChange={(ev) => this.setState({[ev.target.name]: ev.target.value})}
                    errors={errors}
                />

                    <Input
                    type='Password'
                    value={pass}
                    name="pass"
                    label="Password"
                    id="pass"
                    placeholder="Enter Your Password Here"
                    onChange={(ev) => this.setState({[ev.target.name]: ev.target.value})}
                    errors={errors}
                />
                <Input
                type = "submit"
                value="Login"
                name="my-login-btn"
                id="my-btn"
                 />
                </form>
                </div>
            </div>
        );
    }
}
 
export default Login;