import React, {Component} from 'react';
import './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {loading} = this.props
        return (
                loading ? (
                        <div className="loading-wrapper">
                            <i className="iconfont icon-loading" />
                        </div>
                    ): null
        )
    }
}