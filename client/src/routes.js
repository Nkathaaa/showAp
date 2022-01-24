
import {Switch,Link}from "react-router-dom"
import Home from "./components/Home/home"
import { Route } from 'react-router';
import Layout from './hoc/Layout/layout';
import React, { Component } from 'react';
import SignIn from "./components/SignIn/signIn";
import SignUp from "./components/SignUp/signUp";
import Test from "./components/widgets/Test/test";
import Test2 from "./components/widgets/Test/test2";
import Reset from "./components/Reset/reset";
import Movie from "./components/movie";

class Routes extends Component {
  render(){
     return (
      <Layout>
            <Switch>
            
              <Route path="/" exact component={Home}></Route>
              <Route path="/signin" exact component={SignIn}></Route>
              <Route path="/signup" exact component={SignUp}></Route>
              <Route path="/movie" exact component={Movie}></Route>
              <Route path="/test" exact component={Test}></Route>
              <Route path="/test2" exact component={Test2}></Route>
              <Route path="/reset" exact component={Reset}></Route>

              
            </Switch>
        </Layout>
    )
     }
}
export default Routes;