import React, {Component} from 'react';
import { HashRouter,Route,NavLink,Redirect,Switch   } from 'react-router-dom'
import Main from '@/containers/Main/Main'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={Main}></Route>
                </Switch>
            </HashRouter>
        )
    }
}