import {action, observable} from 'mobx-miniprogram'

const store = observable({
    // 数据字段
    numA: 1,
    numB: 2,

    // 计算属性
    get sum() {
        return this.numA + this.numB
    },

    // actions
    update: action(() => {
        // @ts-ignore
        const sum = this.sum
        // @ts-ignore
        this.numA = this.numB
        // @ts-ignore
        this.numB = sum
    })
})
export default store;