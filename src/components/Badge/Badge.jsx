import React, {Component} from 'react';
import './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {text,color} = this.props
        return (
            <span className="yx-badge" style={{color: color,border: `1px solid ${color}`}}>
                {text}
            </span>
        )
    }
}