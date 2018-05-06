import React, {Component} from 'react';
import Policys from '@/components/PolicyList/PolicyList'

import './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="shop-cart">
                <header className="shop-cart-header">
                    购物车
                </header>
                <Policys policys={['30天无忧退货','48小时快速退款', '满88元免邮费']}></Policys>
                <section className="no-goods">
                    <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" />
                    <p className="text">
                        去添加点什么吧
                    </p>
                </section>
            </div>
        )
    }
}