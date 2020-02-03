import styles from './index.less';

import { List, Tag } from 'antd';
import { connect } from 'dva';
import { Dispatch, AnyAction } from 'redux';
import React from 'react';

import api from '@/services/apiRoutes';

interface ApiListProps {
  dispatch: Dispatch<AnyAction>;
}

const ApiList: React.FC<ApiListProps> = props => (
  <List
    dataSource={Object.values(api)}
    renderItem={item => (
      <List.Item
        className={styles.pre}
        onClick={() => {
          const { dispatch } = props;
          dispatch({
            type: 'request/changeApiRoute',
            payload: item,
          });
        }}
      >
        <span style={{ width: 60 }}>
          <Tag style={{ marginRight: 10 }}>{item.method}</Tag>
        </span>
        {item.url}
      </List.Item>
    )}
  />
);

export default connect()(ApiList);
