import React, {Component} from 'react';
import './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    static defaultProps = {
        list: ['推荐','居家','配件','服装', '电器','洗护','饮食','婴童','文艺', '特色区', '火星区']
    }

    handleItemClick = (index) => {
        this.setState({
            activeIndex: index
        })
        const onClick = this.props.onclick
        onClick && onClick(index)
    }

    render() {
        return (
            <ul className="yx-types">
                {this.props.list.map((t,index) => {
                    const itemCls = index === this.state.activeIndex ? 'item active' : 'item'
                    return (
                        <li key={index} className={itemCls} onClick={(e) => this.handleItemClick(index)}>{t}</li>
                    )
                })}
            </ul>
        )
    }
}