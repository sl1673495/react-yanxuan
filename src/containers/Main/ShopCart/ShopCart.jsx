import React, {Component} from 'react';
import Policys from '@/components/PolicyList/PolicyList'
import { connect } from 'react-redux'
import Badge from '@/components/Badge/Badge'
import CartControl from '@/components/CartControl/CartControl'

import './style.less'

const mapStateToProps = (state) => {
    return {
        goods: state.shopCartGoods
    }
};

class ShopCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            discountPrice: 288
        }
    }

    render() {
        const {goods} = this.props
        const {discountPrice} = this.state

        const totalPrice = goods.reduce((total,good) => {
            return total + good.price * good.number
        }, 0)

        const diff = Math.max(discountPrice - totalPrice, 0)
        return (
            <div className="shop-cart">
                <header className="shop-cart-header">
                    购物车
                </header>
                <section className="policys-wrapper">
                    <Policys policys={['30天无忧退货','48小时快速退款', `满${discountPrice}元免邮费`]} />
                </section>
                <section className="discount">
                   <Badge text='全场加价购' color='#f48f18'/>
                    {
                        diff > 0 ?
                            (<span> 再购<span className="diff">{diff}</span>元立享满包邮</span>):
                            `已满足包邮条件`
                   }
                </section>
                {
                    goods.length
                        ?
                        <section className="cart-good-list">
                            {
                                goods.map(good => {
                                    return (
                                        <div className="good-item">
                                            <div className="radio"></div>
                                            <div className="img-wrapper">
                                                <img src={good.img} />
                                            </div>
                                            <div className="good-info">
                                                <p className="name">{good.name}</p>
                                                <p className="price">￥{good.price}</p>
                                            </div>
                                            <div className="control">
                                                <CartControl value={good.number}/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </section>
                        :
                        <section className="no-goods">
                            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" />
                            <p className="text">
                                去添加点什么吧
                            </p>
                        </section>

                }

            </div>
        )
    }
}

export default connect(mapStateToProps)(ShopCart)