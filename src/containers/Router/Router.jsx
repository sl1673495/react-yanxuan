import React, {Component} from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom'
import Main from '@/containers/Main/Main'
import GoodDetail from '@/containers/GoodDetail/GoodDetail'
import { Provider } from 'react-redux'
import {store} from '@/store'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <Route exact path="/" render={() => (<Redirect to="/main/home"/>)}/>
                        <Route path='/main' component={Main}></Route>
                        <Route exact path='/detail' component={GoodDetail}></Route>
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}