import styles from './index.less';

import React from 'react';
import { Row, Select, Input, Button } from 'antd';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';

import { ConnectState } from '@/models/connect';
import { RequestStateType } from '@/models/request';

const { Option } = Select;
const InputGroup = Input.Group;
const { TextArea } = Input;

const methods = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];

interface CommandProps {
  dispatch: Dispatch<AnyAction>;
  request: RequestStateType;
}

const Command: React.FC<CommandProps> = props => {
  const { request } = props;

  return (
    <Row justify="space-between">
      <InputGroup compact style={{ flex: 1 }}>
        <Select
          value={request.method}
          style={{ width: 100 }}
          onChange={method => {
            const { dispatch } = props;
            dispatch({
              type: 'request/changeApiRoute',
              payload: { method },
            });
          }}
        >
          {methods.map(item => (
            <Option value={item} key={item}>
              {item}
            </Option>
          ))}
        </Select>
        <Input
          value={request.url}
          style={{ width: 'calc(100% - 120px)' }}
          placeholder="URL Including Query Params"
          onChange={e => {
            const { dispatch } = props;
            dispatch({
              type: 'request/changeApiRoute',
              payload: { url: e.target.value },
            });
          }}
        />
      </InputGroup>
      <Button type="primary" style={{ width: 100 }}>
        Send
      </Button>
      <div style={{ margin: '24px 0' }} />
      <TextArea
        value={request.body}
        autoSize={{ minRows: 2, maxRows: 6 }}
        placeholder={'Body payload, such as:{"userName":"admin","password":"admin"}'}
        onChange={e => {
          const { dispatch } = props;
          dispatch({
            type: 'request/changeApiRoute',
            payload: { body: e.target.value },
          });
        }}
      />
      <div className={styles.result}></div>
    </Row>
  );
};

export default connect(({ request }: ConnectState) => ({
  request,
}))(Command);
