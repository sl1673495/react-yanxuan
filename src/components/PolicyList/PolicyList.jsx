import React, {Component} from 'react';
import './style.less'

// 政策列表
export default class extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        policys: []
    }

    render() {
        return (
            <ul className="policy-list">
                {this.props.policys.map(text => {
                    return (
                        <li className="item">
                            <i className="icon-right" /> <span className="text">{text}</span>
                        </li>
                    )
                })}
            </ul>
        )
    }
}