"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        text: ""
    },
    onLoad: function () {
        this.setData({
            text: app.globalData.text,
        });
    },
    onShow: function () {
        wx.getStorageInfo({
            success: function () {
                console.log('成功执行');
            },
            fail: function () {
                console.log('失败执行');
            },
            complete: function () {
                console.log('接口调用结束');
            }
        });
        wx.getStorageInfo().then(function () {
            console.log('成功执行');
        }).catch(function () {
            console.log('失败执行');
        }).finally(function () {
            console.log('接口调用结束');
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRWpDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxFQUFFO0tBQ1g7SUFDRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUk7U0FDNUIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELE1BQU07UUFDRixFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDdkIsQ0FBQztZQUNELElBQUksRUFBRTtnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3ZCLENBQUM7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN6QixDQUFDO1NBQ0osQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUFwcE9wdGlvbiBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL0lBcHBPcHRpb25cIjtcblxuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XG5cblBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogXCJcIlxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdGV4dDogYXBwLmdsb2JhbERhdGEudGV4dCxcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIG9uU2hvdygpIHtcbiAgICAgICAgd3guZ2V0U3RvcmFnZUluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiJDlip/miafooYwnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5aSx6LSl5omn6KGMJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjqXlj6PosIPnlKjnu5PmnZ8nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB3eC5nZXRTdG9yYWdlSW5mbygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aIkOWKn+aJp+ihjCcpXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflpLHotKXmiafooYwnKVxuICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjqXlj6PosIPnlKjnu5PmnZ8nKVxuICAgICAgICB9KVxuICAgIH1cbn0pXG4iXX0=