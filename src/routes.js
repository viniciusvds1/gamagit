import React from 'react';
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import Respositories  from './pages/Repositorios/Repositors';
import  Home from './pages/home/home'

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/repositories" component={Respositories}/>

            </Switch>

        </BrowserRouter>
    )
}