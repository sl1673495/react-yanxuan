/**
 * 商品侧滑
 */
import React, {Component} from 'react';
import XScroll from '@/components/XScroll/XScroll'
import {store, setCurrentGoods} from '@/store'
import {withRouter} from 'react-router-dom';
import './style.less'

 class GoodsSwiper extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        goods: []
    }

    handleGoodClick = (index) => {
        store.dispatch(setCurrentGoods(this.props.goods[index]))
        this.props.history.push('/detail')
    }

    render() {
        const {goods} = this.props
        return (
            <XScroll>
                <ul className="good-list">
                    {
                        goods.map((good,index) => {
                            return (
                                <li className="item" key={index} onClick={() => this.handleGoodClick(index)}>
                                    <div className="img-wrapper">
                                        <img src={good.img} />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            {good.name}
                                        </p>
                                        <p className="describe">
                                            {good.describe}
                                        </p>
                                        <p className="price">
                                            ￥ {good.price}
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </XScroll>
        )
    }
}

export default withRouter(GoodsSwiper)