// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("skills"));

// 指定图表的配置项和数据
option = {
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "静态页面", max: 100 },
      { name: "编程基础", max: 100 },
      { name: "Vue", max: 100 },
      { name: "JavaScript", max: 100 },
      { name: "项目开发", max: 100 },
      { name: "交流沟通", max: 100 },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [70, 65, 60, 60, 50, 80],
          name: "能力雷达",
        },
      ],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
