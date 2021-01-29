import { createStoreBindings } from 'mobx-miniprogram-bindings'
import store  from '../../store/store'

Page({
    onLoad() {
        this.storeBindings = createStoreBindings(this, {
            store,
            fields: ['numA', 'numB', 'sum'],
            actions: ['update'],
        })
    },
})
