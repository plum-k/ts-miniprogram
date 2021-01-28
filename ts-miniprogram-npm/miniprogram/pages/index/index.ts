const _ = require("underscore")

Page({
    onShow() {
        console.log(_.initial([5, 4, 3, 2, 1]))
    }
})
