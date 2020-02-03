import React from 'react';
import styles from './index.less';
import { List, Tag } from 'antd';
import api from '@/services/apiRoutes';

export default () => (
  <List
    dataSource={Object.values(api)}
    renderItem={item => (
      <List.Item className={styles.pre}>
        <span style={{ width: 60 }}>
          <Tag style={{ marginRight: 10 }}>{item.method}</Tag>
        </span>
        {item.url}
      </List.Item>
    )}
  />
);
