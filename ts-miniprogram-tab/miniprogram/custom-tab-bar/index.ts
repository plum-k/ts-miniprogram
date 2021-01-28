Component({
    data: {
        active: 0,
        list: [
            {
                "url": "/pages/index/index",
                "icon": "wap-home-o",
                "text": "首页"
            },
            {
                "url": "/pages/test/index",
                "icon": "cluster-o",
                "text": "test"
            },
            {
                "url": "/pages/tab/index",
                "icon": "setting-o",
                "text": "tab"
            },
        ]
    },
    methods: {
        onChange(e) {
            this.setData({active: e.detail});
            wx.switchTab({
                url: this.data.list[e.detail].url
            });
        },
        init() {
            const page = getCurrentPages().pop();
            this.setData({
                // @ts-ignore
                active: this.data.list.findIndex(item => item.url === `/${page.route}`)
            });
        }
    }
});
