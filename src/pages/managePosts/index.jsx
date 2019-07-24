import React, { Component } from 'react';
import { Table } from 'antd';
class page3 extends Component {
  render() {
    const columns = [
      {
        title: 'PID',
        dataIndex: 'pid',
      },
      {
        title: '标题',
        className: 'column-money',
        dataIndex: 'title',
      },
      {
        title: '访问量',
        dataIndex: 'VNum',
      },
      {
        title: '分类',
        dataIndex: 'sort',
      },
      {
        title: '是否可见',
        dataIndex: 'show',
      },
    ];

    const data = [
      {
        key: '1',
        pid: '23',
        title: 'Just do It',
        VNum: '1233',
        sort: 'Story',
        show: '是',
      },
      {
        key: '1',
        pid: '23',
        title: 'Just do It',
        VNum: '1233',
        sort: 'Story',
        show: '是',
      },
      {
        key: '1',
        pid: '23',
        title: 'Just do It',
        VNum: '1233',
        sort: 'Story',
        show: '是',
      },
      {
        key: '1',
        pid: '23',
        title: 'Just do It',
        VNum: '1233',
        sort: 'Story',
        show: '是',
      },
      {
        key: '1',
        pid: '23',
        title: 'Just do It',
        VNum: '1233',
        sort: 'Story',
        show: '是',
      },
      {
        key: '1',
        pid: '23',
        title: 'Just do It',
        VNum: '1233',
        sort: 'Story',
        show: '是',
      },
    ];

    return (
      <div style={{ backgroundColor: '#FFF', padding: 40, minHeight: '100%' }}>
        <div style={{ marginBottom: 20 }}>文章列表：</div>
        <Table columns={columns} dataSource={data} bordered size="middle" />
      </div>
    );
  }
}

export default page3;
