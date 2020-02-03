import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { Card, Row, Col } from 'antd';
import ApiList from './ApiList';
import Command from './Command';

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Row>
        <Col>
          <ApiList />
        </Col>
        <Col>
          <Command />
        </Col>
      </Row>
    </Card>
  </PageHeaderWrapper>
);
