import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Card } from 'antd';
// import styles from './index.less';

class OtherData extends Component {
  getOption = () => {
    return {
      title: {
        text: '来源分析',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['百度', '友站', '搜狗'],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '百度',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '友站',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '搜狗',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
      ],
    };
  };
  render() {
    return (
      <div style={{ backgroundColor: '#FFF', height: '100%', padding: 30, display: 'flex' }}>
        <Card title="访问来源：" style={{ width: '48%', margin: '1%' }}>
          <ReactEcharts
            option={this.getOption()}
            style={{ height: '350px', width: '100%' }}
            className="react_for_echarts"
            theme="light"
          />
        </Card>
        <Card title="访问来源：" style={{ width: '48%', margin: '1%' }}>
          <ReactEcharts
            option={this.getOption()}
            style={{ height: '350px', width: '100%' }}
            className="react_for_echarts"
          />
        </Card>
      </div>
    );
  }
}

export default OtherData;
