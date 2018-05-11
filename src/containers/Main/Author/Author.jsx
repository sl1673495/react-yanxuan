import React, {Component} from 'react';
import authorImg from '@/static/image/author.png'
import Loading from '@/components/Loading/Loading'

import './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgLoading: true
        }
    }

    imgLoad = (e) => {
        this.setState({
            imgLoading: false
        })
    }

    render() {
        const {imgLoading} = this.state
        return (
            <React.Fragment>
                <div className="author-wrapper">
                    <Loading loading={imgLoading} />
                    <img src={authorImg} onLoad={this.imgLoad}/>
                </div>
                <div className="desc">
                    <h1 className="title">技术栈</h1>
                    <p>
                        React、React-Router、Redux、Better-Scroll
                    </p>
                </div>
                <div className="desc">
                    <h1 className="title">源码地址</h1>
                    <p>
                        <a className="link" href="https://github.com/sl1673495/react-yanxuan">
                            https://github.com/sl1673495/react-yanxuan
                        </a>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}