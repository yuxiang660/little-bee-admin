import React from 'react';
import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';

export default () => (
  <DefaultFooter
    copyright="2020 Little Bee"
    links={[
      {
        key: 'Little Bee',
        title: 'Little Bee',
        href: 'https://github.com/yuxiang660',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/yuxiang660/little-bee-admin',
        blankTarget: true,
      },
    ]}
  />
);
