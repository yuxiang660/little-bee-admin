import React from 'react';
import { Row, Select, Input, Button } from 'antd';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';

import { ConnectState } from '@/models/connect';
import { RequestStateType } from '@/models/request';

const { Option } = Select;
const InputGroup = Input.Group;
const methods = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];

interface CommandProps {
  dispatch: Dispatch<AnyAction>;
  request: RequestStateType;
}

const Command: React.FC<CommandProps> = props => {
  const { request } = props;

  return (
    <Row justify="space-between">
      <InputGroup compact size="large" style={{ flex: 1 }}>
        <Select
          size="large"
          value={request.method}
          style={{ width: 100 }}
          onChange={method => {
            const { dispatch } = props;
            dispatch({
              type: 'request/changeMethod',
              method,
            });
          }}
        >
          {methods.map(item => (
            <Option value={item} key={item}>
              {item}
            </Option>
          ))}
        </Select>
        <Input value={request.url} style={{ width: 'calc(100% - 200px)' }} />
        <Button size="large">Params</Button>
      </InputGroup>
      <Button size="large" type="primary" style={{ width: 100 }}>
        Send
      </Button>
    </Row>
  );
};

export default connect(({ request }: ConnectState) => ({
  request,
}))(Command);
