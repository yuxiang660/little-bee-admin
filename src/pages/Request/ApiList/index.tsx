import styles from './index.less';

import { List, Tag } from 'antd';
import { connect } from 'dva';
import { Dispatch, AnyAction } from 'redux';
import React from 'react';

import api from '@/services/apiRoutes';

interface ApiListProps {
  dispatch: Dispatch<AnyAction>;
}

const methodTagColor = {
  GET: 'green',
  POST: 'orange',
  DELETE: 'red',
  PUT: 'geekblue',
};

const ApiList: React.FC<ApiListProps> = props => (
  <List
    className={styles.requestList}
    dataSource={Object.values(api)}
    renderItem={item => (
      <List.Item
        className={styles.listItem}
        onClick={() => {
          const { dispatch } = props;
          dispatch({
            type: 'request/changeApiRoute',
            payload: { method: item.method, url: item.url },
          });
          dispatch({
            type: 'request/changeBody',
            payload: { body: item.body },
          });
        }}
      >
        <span style={{ width: 72 }}>
          <Tag style={{ marginRight: 8 }} color={methodTagColor[item.method]}>
            {item.method}
          </Tag>
        </span>
        {item.url}
      </List.Item>
    )}
  />
);

export default connect()(ApiList);
