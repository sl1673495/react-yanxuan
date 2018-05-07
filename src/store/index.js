import { createStore,combineReducers } from 'redux';

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

// 减少数量
export const decreaseFromCart = (good) => {
    return {
        type: 'DECREASE_FROM_CART',
        good
    }
}

const cartReducer = function(shopCartGoods,action){
    const copyGoods = shopCartGoods.slice()
    const actionGood = action.good
    const exsitGood = copyGoods.find(good => good.name === actionGood.name)
    switch (action.type) {
        case 'ADD_TO_CART':
            if (exsitGood) {
                exsitGood.number ++
            }else {
                actionGood.number = 1
                copyGoods.push(actionGood)
            }
            return copyGoods
        case 'DECREASE_FROM_CART':
            exsitGood.number --
            return copyGoods
        default:
            return shopCartGoods;
    }
}

const goodReducer = function (currentGood, action) {
    switch (action.type) {
        case 'SET_CURRENT_GOOD':
            const {good} = action
            return good
        default:
            return currentGood;
    }
}

const rootReducer = (state = {}, action) => {
    return {
        currentGood: goodReducer(state.currentGood, action),
        shopCartGoods: cartReducer(state.shopCartGoods, action)
    }
}

export const store = createStore(rootReducer,defaultState)

// 商品数量
export const goodsNum = () => {
    return store.getState().shopCartGoods.reduce((total, good) => {
        return total + good.number
    }, 0)
}
