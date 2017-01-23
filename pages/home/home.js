// pages/home/home.js
Page({
  data:{
    juices: [
      {
        id: 111,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: false,
        choice: {
          tem: ["冷", "热"],
          sugar: ["无糖","少糖","多糖"]
        }
      },
      {
        id: 222,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: true
      },
      {
        id: 333,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: false
      },
      {
        id: 444,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: true
      },
      {
        id: 555,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: true
      },
      {
        id: 666,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: true
      },
      {
        id: 777,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: true
      },
      {
        id: 888,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: true
      },
      {
        id: 999,
        image:"../../images/百香果苹果汁.png",
        title: "百香果苹果汁",
        price: "30",
        hasChoice: true
      }

    ],
    num: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  }
})