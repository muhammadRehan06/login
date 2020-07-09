import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Login from './Components/Login/Login';

class Router extends Component{
    render(){
        return(
        <BrowserRouter>
        <Route path="/" component={Login}/>
        </BrowserRouter>
        )
    }
}
export default Router;
