import IAppOption from "../../interface/IAppOption";

const app = getApp<IAppOption>();

Page({
    data: {
        text: ""
    },
    onLoad() {
        this.setData({
            text: app.globalData.text,
        })
    },
    onShow() {
        wx.getStorageInfo({
            success: () => {
                console.log('成功执行')
            },
            fail: () => {
                console.log('失败执行')
            },
            complete: () => {
                console.log('接口调用结束')
            }
        })
        wx.getStorageInfo().then(() => {
            console.log('成功执行')
        }).catch(() => {
            console.log('失败执行')
        }).finally(() => {
            console.log('接口调用结束')
        })
    }
})
