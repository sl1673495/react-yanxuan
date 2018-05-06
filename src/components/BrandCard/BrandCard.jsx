import React, {Component} from 'react';
import './style.less'

// 品牌制造商
export default class extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        brand: '',
        price: '',
        img: '',
        isNew: false,
        href: ''
    }
    render() {
        const {brand, price, img, isNew, href} = this.props
        return (
            <a className="brand-item">
                <img src={img} />
                <div className="content" >
                    <p className="text">
                        {brand}制造商
                    </p>
                    <p className="text">
                        {price}元起
                    </p>
                    {isNew ? <i className="icon-new" /> : ''}
                </div>
            </a>
        )
    }
}