import React, {Component} from 'react';
import './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    handleClickDecrease = () => {
        const {onDecrease,value} = this.props
        onDecrease && (value > 1) && onDecrease()
    }

    handleClickAdd = () => {
        const {onAdd} = this.props
        onAdd && onAdd()
    }

    render() {
        const {value} = this.props
        const decreaseCls = value > 1 ? 'decrease' : 'decrease disabled'
        return (
            <div className="cart-control">
                <div className={decreaseCls} onTouchStart={this.handleClickDecrease}>-</div>
                <div className="input">
                    {value}
                </div>
                <div className="add" onTouchStart={this.handleClickAdd}>+</div>
            </div>
        )
    }

}