import React, {Component} from 'react';
import Policys from '@/components/PolicyList/PolicyList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import Badge from '@/components/Badge/Badge'
import CartControl from '@/components/CartControl/CartControl'
import {addToCart, decreaseFromCart} from '@/store'

import './style.less'

const mapStateToProps = (state) => {
    return {
        goods: state.shopCartGoods
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addToCart,
        decreaseFromCart
    }, dispatch);
}

class ShopCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            discountPrice: 288,
            // 默认所有商品选中 用 {index: Boolean}的形式记录
            selectedMap: this.props.goods.reduce((map, good, index) => {
                map[index] = true
                return map
            }, {})
        }
    }

    handleControlEvent = (emitName, index) => {
        const {goods, addToCart, decreaseFromCart} = this.props
        const clickGood = goods[index]
        switch (emitName) {
            case 'ADD' :
                return () => {
                    addToCart(clickGood)
                }
            case 'DECREASE':
                return () => {
                    decreaseFromCart(clickGood)
                }
        }
    }

    handleCheck = (e, index) => {
        const checked = e.target.checked
        const selectedMap =  this.state.selectedMap
        selectedMap[index] = checked
        this.setState({
            selectedMap
        })
    }

    handleCheckAll = (e) => {
        const checked = e.target.checked
        const selectedMap =  this.state.selectedMap
        Object.keys(selectedMap).forEach(key => selectedMap[key] = checked)
        this.setState({
            selectedMap
        })
    }

    pay = () => {
        const amount = this.selectedPrice
        amount > 0 && alert('支付' +  amount + '元')
    }

    render() {
        const {goods} = this.props

        const {discountPrice,selectedMap} = this.state

        const selectedGoods = goods.filter((good,index) => selectedMap[index])

        // 选中商品的数量和价格
        let selectedNum = 0
        let selectedPrice = 0
        selectedGoods.forEach((good) => {
            selectedPrice += good.price * good.number
            selectedNum += good.number
        })

        this.selectedPrice = selectedPrice

        // 距离优惠的价格
        const discountDiff = Math.max(discountPrice - selectedPrice, 0)

        // 下单按钮的样式
        const payCls =  selectedNum > 0 ? 'pay-button enough' : 'pay-button'

        // 全选框是否勾选
        const checkAllValue = Object.keys(selectedMap).every(key => selectedMap[key])

        return (
            <div className="shop-cart">
                <header className="shop-cart-header">
                    购物车
                </header>
                <section className="policys-wrapper">
                    <Policys policys={['30天无忧退货', '48小时快速退款', `满${discountPrice}元免邮费`]}/>
                </section>
                <section className="discount">
                    <Badge text='全场加价购' color='#f48f18'/>
                    {
                        discountDiff > 0 ?
                            (<span> 再购<span className="diff">{discountDiff}</span>元立享满包邮</span>) :
                            `已满足包邮条件`
                    }
                </section>
                {
                    goods.length
                        ?
                        <div>
                            <section className="cart-good-list">
                                {
                                    goods.map((good, index) => {
                                        return (
                                            <div className="good-item" key={index}>
                                                <div className="radio">
                                                    <input checked={selectedMap[index]} onChange={ e => this.handleCheck(e,index)} type="checkbox" />
                                                </div>
                                                <div className="img-wrapper">
                                                    <img src={good.img}/>
                                                </div>
                                                <div className="good-info">
                                                    <p className="name">{good.name}</p>
                                                    <p className="price">￥{good.price}</p>
                                                </div>
                                                <div className="control">
                                                    <CartControl onAdd={this.handleControlEvent('ADD', index)}
                                                                 onDecrease={this.handleControlEvent('DECREASE', index)}
                                                                 value={good.number}/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                            <section className="accounts-bar">
                                <div className="check-wrapper">
                                    <input checked={checkAllValue} onChange={this.handleCheckAll} type="checkbox" />  已选({selectedNum})
                                </div>
                                <div className="pay-wrapper">
                                    <span className="price">￥{selectedPrice}</span>
                                    <div className={payCls} onClick={this.pay}>下单</div>
                                </div>
                            </section>
                        </div>

                        :
                        <section className="no-goods">
                            <img
                                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"/>
                            <p className="text">
                                去添加点什么吧
                            </p>
                        </section>

                }

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)