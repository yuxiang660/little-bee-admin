import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { Card, Row, Col } from 'antd';
import ApiList from './ApiList';
import Command from './Command';

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Row>
        <Col lg={8} md={24}>
          <ApiList />
        </Col>
        <Col lg={16} md={24}>
          <Command />
        </Col>
      </Row>
    </Card>
  </PageHeaderWrapper>
);
