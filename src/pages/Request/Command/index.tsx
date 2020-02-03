import React from 'react';
import { Row, Select, Input, Button } from 'antd';
import styles from './index.less';

const { Option } = Select;
const InputGroup = Input.Group;
const methods = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];

export default () => (
  <Row justify="space-between">
    <InputGroup compact size="large" style={{ flex: 1 }}>
      <Select size="large" style={{ width: 100 }}>
        {methods.map(item => (
          <Option value={item} key={item}>
            {item}
          </Option>
        ))}
      </Select>
      <Input value="fake url" style={{ width: 'calc(100% - 200px)' }} />
      <Button size="large">Params</Button>
    </InputGroup>
    <Button size="large" type="primary" style={{ width: 100 }}>
      Send
    </Button>
  </Row>
);
