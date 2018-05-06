import { createStore } from 'redux';

const defaultState = {
    currentGood: {},
    shopCartGoods: []
}

// 设置展示详情的商品
export const setCurrentGoods = (good) => {
    return {
        type: 'SET_CURRENT_GOOD',
        good
    }
}

// 加入购物车
export const addToCart = (good) => {
    return {
        type: 'ADD_TO_CART',
        good
    }
}


const reducer = function (state, action) {
    switch (action.type) {
        case 'SET_CURRENT_GOOD':
            const {good} = action
            const newState = Object.assign({}, state, {
                currentGood: good
            })
            return newState
        case 'ADD_TO_CART':
            const {shopCartGoods} = state
            const copyGoods = shopCartGoods.slice()
            const addGood = action.good
            const exsitGood = copyGoods.find(good => good.name === addGood.name)
            if (exsitGood) {
                exsitGood.number ++
            }else {
                addGood.number = 1
                copyGoods.push(addGood)
            }
            return Object.assign({}, state, {
                shopCartGoods: copyGoods
            })
        default:
            return state;
    }
}

export const store = createStore(reducer,defaultState)

// 商品数量
export const goodsNum = () => {
    return store.getState().shopCartGoods.reduce((total, good) => {
        return total + good.number
    }, 0)
}
