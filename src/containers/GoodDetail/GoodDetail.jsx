import React, {Component} from 'react'
import {store, addToCart} from '@/store'
import './style.less'
import {withRouter} from 'react-router-dom'
import {isEmpty, ballToElement} from '@/static/js/util'
import PolicyList from '@/components/PolicyList/PolicyList'
import ReactDOM from 'react-dom'
import CartIcon from '@/components/CartIcon/CartIcon'

class GoodDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const currentGood = store.getState().currentGood
        if (isEmpty(currentGood)) {
            this.toHome()
        }
        this.currentGood = currentGood
    }

    toHome = () => {
        this.props.history.push('/main/home')
    }

    handleCartClick = () => {
        this.props.history.push('/main/shopcart')
    }

    handleBackClick = () => {
        this.props.history.goBack()
    }

    handleAddCart = (e) => {
        ballToElement(e, ReactDOM.findDOMNode(this.shopCart))
            .then(() => {
                this.addCart()
            })
    }

    addCart = () => {
        store.dispatch(addToCart(this.currentGood))
    }

    render() {
        const {img,name,price,describe} = this.currentGood
        return (
            <div className="good-detail">
                <div className="good-header-wrapper">
                    <header className="good-detail-header">
                        <i className="iconfont icon-shouye home" onClick={this.toHome}/>
                        <p className="title">
                            <i className="logo" />
                        </p>
                        <CartIcon onClick={this.handleCartClick} getCartRef={ref => this.shopCart = ref}/>
                    </header>
                </div>
                <div className="detail-content">
                    <div className="img-wrapper">
                        <img src={img} />
                    </div>
                    <div className="good-info">
                        <div className="info-left">
                            <p className="name">{name}</p>
                            <p className="describe">{describe}</p>
                            <p className="price">￥{price}</p>
                        </div>
                        <div className="info-right">
                            <p className="comment-num">195</p>
                            <p className="text">用户好评</p>
                        </div>
                    </div>
                    <ul className="action-wrapper">
                        <li className="action-item">
                            1个促销： <span className="ticket"></span> <span className="ticket-text">买送优惠券</span>
                        </li>
                        <li className="action-item">
                            积分： 购买最多得15积分
                        </li>
                        <li className="action-item">
                            <p className="text-left">
                                服务：
                            </p>
                            <div className="content-right">
                                <PolicyList
                                    policys={['30天无忧退换货', '48小时快速退款', '满88元免邮费', '网易自营品牌', '国内部分地区无法配送']}>
                                </PolicyList>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="shop-bar">
                    <div className="back">
                        <i className="iconfont icon-ziyuan" onClick={this.handleBackClick} />
                    </div>
                    <div className="item buy-now">立即购买</div>
                    <div className="item add-cart" onTouchStart={this.handleAddCart}>加入购物车</div>
                </div>
            </div>
        )
    }
}

export default withRouter(GoodDetail)