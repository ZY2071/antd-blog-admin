/**
 * title: 这里定义页面级标题
 */

import React, { Component } from 'react';
import Editor from 'for-editor';
import { Input } from 'antd';
import { Button } from 'antd';

import styles from './index.less';

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  handlePublishNewPost = () => {
    console.log(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <div style={{ marginBottom: 20, backgroundColor: '#fff', paddingBottom: 20 }}>
        <div className={styles.inputBox}>
          <div>
            标题：
            <Input placeholder="请输入标题" style={{ width: 200 }} />
          </div>
          <div>
            关键字：
            <Input placeholder="请输入关键字" style={{ width: 300 }} />
          </div>
          <div>
            类别：
            <Input placeholder="请输入类别" style={{ width: 150 }} />
          </div>
          <Button type="primary" style={{ marginLeft: 20 }} onClick={this.handlePublishNewPost}>
            发布
          </Button>
        </div>
        <div style={{ width: '92%', margin: '0 auto' }}>
          <Editor value={value} onChange={value => this.handleChange(value)} />
        </div>
      </div>
    );
  }
}

export default NewPost;
