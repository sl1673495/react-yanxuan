export const isEmpty = (obj) => {
    return !Object.keys(obj).length > 0
}

export const ballToElement = (e,
                              el,
                              option = {}) => {

    return new Promise((resolve) => {
        const initOptions = {
            ballWidth: 20,
            ballColor: '#b4282d',
            timingFunction:'all .5s cubic-bezier(0,0,0.28,1)',
            ...option
        }
        const nativeEvent = e.nativeEvent.touches[0]
        const {ballWidth, ballColor, timingFunction} = initOptions
        // 获取初始位置
        const [x, y] = [nativeEvent.clientX , nativeEvent.clientY]
        // 获取终点位置
        const finalPos = el.getBoundingClientRect()
        const [finalX,finalY] = [finalPos.left, finalPos.top]
        const ball = document.createElement('div')
        document.body.appendChild(ball)
        ball.style.cssText =
            'position: fixed;' +
            `left: ${x - ballWidth / 2}px;` +
            `top: ${y - ballWidth / 2 }px;` +
            `width: ${ballWidth}px; ` +
            `height: ${ballWidth}px; ` +
            `background: ${ballColor};` +
            'z-index: 2; ' +
            'border-radius: 50%;' +
            `transition: ${timingFunction};`
        ball.addEventListener('transitionend', function () {
            this.remove()
            resolve()
        })
        setTimeout(() => {
            ball.style.top = `${finalY + ballWidth / 2}px`
            ball.style.left = `${finalX + ballWidth / 2}px`
        },0)
    })
}