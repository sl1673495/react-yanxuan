import React, { Component } from 'react';
import BrandCard from '@/components/BrandCard/BrandCard'
import './Home.less'
import XScroll from '@/components/XScroll/XScroll'
import TypeList from '@/components/TypeList/TypeList'
import PolicyList from '@/components/PolicyList/PolicyList'
import ImageSwipper from '@/components/ImageSwipper/ImageSwipper'
import ColorPanel from '@/components/ColorPanel/ColorPanel'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="home">
                <header className="home-header">
                    <div className="fixed-header">
                        <div className="search-bar">
                            <div className="logo">
                                <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" />
                            </div>
                            <div className="search">
                                <i className="iconfont icon-sousuo" />
                                <input placeholder="搜索商品"/>
                            </div>
                        </div>
                        <div className="types-scroll-wrapper">
                            <XScroll className="types-wrapper">
                                <TypeList />
                            </XScroll>
                        </div>
                    </div>
                </header>
                <ImageSwipper list={
                    [
                        'https://yanxuan.nosdn.127.net/7bd5b200deb539d22ae1b5cf2c44eb34.jpg?imageView&thumbnail=750x0&quality=75',
                        'https://yanxuan.nosdn.127.net/520f1abf264d099ba483d11f73125937.jpg?imageView&thumbnail=750x0&quality=75',
                        'https://yanxuan.nosdn.127.net/80fb8a9932c03c305723ab308045af02.jpg?imageView&thumbnail=750x0&quality=75',
                        'https://yanxuan.nosdn.127.net/8cdbd8050e07181ff321511674bffe49.jpg?imageView&thumbnail=750x0&quality=75',
                        'https://yanxuan.nosdn.127.net/256f08553089e2699175c4950027b60b.jpg?imageView&thumbnail=750x0&quality=75',
                        'https://yanxuan.nosdn.127.net/432e9722ae63c5a2136c6454febaa567.jpg?imageView&thumbnail=750x0&quality=75',
                        'https://yanxuan.nosdn.127.net/e89d144dbf0721a17ec879041a515ca3.jpg?imageView&thumbnail=750x0&quality=75',
                        'https://yanxuan.nosdn.127.net/c6ddd46cce0b1a3467b1b3ee8597b683.jpg?imageView&thumbnail=750x0&quality=75'
                    ]}/>
                <PolicyList policys={['网易自营品牌', '30天无忧退货', '48小时快速退款']}/>
                <section className="index-floor">
                    <header className="title">
                        <span className="text">
                            品牌制造商直供 <i className="iconfont icon-ICONbiaozhun_fuzhi-" />
                        </span>
                    </header>
                    <ul className="list">
                        <li className="item">
                            <BrandCard isNew
                                       brand="Nine West"
                                       price={199}
                                       img="https://yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png?imageView&thumbnail=355x0&quality=65"
                                       href="https://m.you.163.com/item/manufacturer?tagId=1038001&page=1&size=100"
                            />
                        </li>
                        <li className="item">
                            <BrandCard
                                brand="Ralph Lauren"
                                price={19}
                                img="https://yanxuan.nosdn.127.net/f898f62e0a3d68faf9506792f344a503.png?imageView&thumbnail=355x0&quality=65"
                                href="https://m.you.163.com/item/manufacturer?tagId=1001020&page=1&size=100"
                            />
                        </li>
                        <li className="item">
                            <BrandCard brand="爱慕"
                                       price={35}
                                       img="https://yanxuan.nosdn.127.net/eadb8d362726ccef7c40659a5f20e210.png?imageView&thumbnail=355x0&quality=65"
                                       href="https://m.you.163.com/item/manufacturer?tagId=1001016&page=1&size=100"
                            />
                        </li>
                        <li className="item">
                            <BrandCard
                                isNew
                                brand=" CK"
                                price={25}
                                img="https://yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png?imageView&thumbnail=355x0&quality=65"
                                href="https://m.you.163.com/item/manufacturer?tagId=1026000&page=1&size=100"
                            />
                        </li>
                    </ul>
                </section>
                <ColorPanel
                    title="新品首发"
                    bgImage="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png"
                    textColor="#8BA0B6"
                    btnColor="#d8e5f1"
                />
            </div>
        )
    }
}