import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import BScroll from 'better-scroll'
import './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const ulDom =  this.types.querySelector('ul')
        if (!ulDom) {
            throw new Error('子节点必须是ul列表')
        }
        const listItems = Array.from(ulDom.querySelectorAll('li'))
        const listWidth = listItems.reduce((total,b) => {
            return total + Number(b.clientWidth)
        },0)
        ulDom.style.width = `${listWidth}px`
        this.scroll = new BScroll(this.types, {
            scrollX: true,
            eventPassthrough: 'vertical',
            click: true
        })
    }

    render() {
       return (
           <div className="scroll-wrapper" ref={types => this.types = types}>
               {this.props.children}
           </div>
       )
    }
}