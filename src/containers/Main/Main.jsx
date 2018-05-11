import React, {Component} from 'react';
import { BrowserRouter,Route,NavLink   } from 'react-router-dom'
import Home from '@/containers/Main/Home/Home'
import ShopCart from '@/containers/Main/ShopCart/ShopCart'
import Author from '@/containers/Main/Author/Author'
import CartIcon from '@/components/CartIcon/CartIcon'
import './style.less'

// 主页包含购物车，首页

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                <div className="router-view">
                    <Route exact path="/main/home" component={Home} />
                    <Route exact path="/main/shopcart" component={ShopCart}/>
                    <Route exact path="/main/author" component={Author}/>
                </div>
                <nav className="App-nav">
                    <NavLink exact activeClassName="active" className="App-nav-link" to="/main/home">
                        <i className="iconfont icon-shouye" />
                        <span className="text">首页</span>
                    </NavLink>
                    <NavLink exact activeClassName="active" className="App-nav-link" to="/main/shopcart">
                        <CartIcon />
                        <span className="text">购物车</span>
                    </NavLink>
                    <NavLink exact activeClassName="active" className="App-nav-link" to="/main/author">
                        <i className="iconfont icon-gerenzhongxin" />
                        <span className="text">作者</span>
                    </NavLink>
                </nav>
            </div>
        )
    }
}