import React, {Component} from 'react';
import './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {value} = this.props
        return (
            <div className="cart-control">
                <div className="decrese">-</div>
                <div className="input">
                    {value}
                </div>
                <div className="add" >+</div>
            </div>
        )
    }

}