import React, {Component} from 'react';
import './style.less'
import {goodsNum, store} from '@/store'
import {withRouter} from 'react-router-dom'

class CartIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: goodsNum()
        }
    }

    handleClickCart = () => {
        const {onClick} = this.props
        onClick && onClick()
    }

    componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
            this.setState({
                number: goodsNum()
            })
        })
        const { getCartRef } = this.props;
        getCartRef && getCartRef(this.refs.shopCart)
    }

    componentWillUnmount() {
        this.unSubscribe()
    }

    render() {
        const {number} = this.state
        return (
            <div className="cart-icon" onClick={this.handleClickCart} ref="shopCart">
                <i className="iconfont icon-gouwuche cart">
                    {number > 0 ? <span className="goods-num">{this.state.number}</span> : ''}
                </i>
            </div>
        )
    }
}

export default CartIcon