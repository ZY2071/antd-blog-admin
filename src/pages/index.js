import styles from './index.less';
import avator from './static/avator.jpg';
import { Card } from 'antd';
import { List, Avatar } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

export default function() {
  var dataAxis = [
    '2019.1.2',
    '2019.1.2',
    '2019.1.2',
    '2019.1.2',
    '2019.1.2',
    '2019.1.2',
    '2019.1.2',
    '2019.1.2',
    '2019.1.2',
    '2019.1.2',
  ];
  var data = [
    220,
    182,
    191,
    234,
    290,
    330,
    310,
    123,
    442,
    321,
  ];
  var yMax = 500;
  var dataShadow = [];

  for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      data: dataAxis,
      axisLabel: {},
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#999',
        },
      },
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: [
      {
        // For shadow
        type: 'bar',
        itemStyle: {
          normal: { color: 'rgba(0,0,0,0.05)' },
        },
        barGap: '-100%',
        barCategoryGap: '40%',
        data: dataShadow,
        animation: false,
      },
      {
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' },
            ]),
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' },
            ]),
          },
        },
        data: data,
      },
    ],
  };
  const data1 = [
    {
      ip: '10.10.10.10',
      province: '重',
      title: '用户 admin 在 10.10.10.10 (重庆) 登录 ！',
    },
    {
      ip: '10.10.10.10',
      province: '黑',
      title: '用户 admin 在 10.10.10.10 (重庆) 退出 ！',
    },
    {
      ip: '10.10.10.10',
      province: '江',
      title: '用户 admin 在 10.10.10.10 (重庆) 登录 ！',
    },
    {
      ip: '10.10.10.10',
      province: '黑',
      title: '用户 admin 在 10.10.10.10 (重庆) 登录 ！',
    },
  ];
  return (
    <div className={styles.normal}>
      <div className={styles.pageHeader}>
        <div style={{ flex: 'auto', display: 'flex', alignItems: 'center' }}>
          <div>
            <img
              alt="头像"
              src={avator}
              style={{ width: 70, borderRadius: '50%', marginLeft: 10 }}
            />
          </div>
          <div style={{ marginLeft: 30 }}>
            <p>早上好，Admin，现在的气温大概是 28 度！</p>
            <p>Go Big or Go Home</p>
          </div>
        </div>
        <div style={{ flex: '0 1 auto', display: 'flex', alignItems: 'center' }}>
          <div className={styles.viewDataCard}>
            <div>今日访客</div>
            <div>1321</div>
          </div>
          <div className={styles.viewDataCard}>
            <div>访问次数</div>
            <div>1321</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: 'flex' }}>
          <Card
            title="访客历史数据"
            style={{ width: '66%', minHeight: '360px', marginRight: '2%' }}
          >
            <ReactEcharts
              option={option}
              style={{ height: '370px', width: '100%' }}
              className="react_for_echarts"
            />
          </Card>
          <Card title="账号登录历史" style={{ width: '32%', minHeight: '300px' }}>
            <List
              itemLayout="horizontal"
              dataSource={data1}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: '#4ea0fb' }}>{item.province}</Avatar>}
                    title={<div>2017-10-05</div>}
                    description={
                      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.title}</div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
