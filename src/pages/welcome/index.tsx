import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Alert, Card, Carousel } from 'antd';
import styles from './index.less';

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="😀 欢迎使用 Little Bee Admin 😀"
        type="success"
        showIcon
        banner
        style={{
          margin: 0,
          marginBottom: 20,
        }}
      />
      <Carousel autoplay>
        <div className={styles.container}>
          <img src="http://q53wkmg88.bkt.clouddn.com/1.png" alt="Loading" />
        </div>
        <div className={styles.container}>
          <img src="http://q53wkmg88.bkt.clouddn.com/2.png" alt="Loading" />
        </div>
        <div className={styles.container}>
          <img src="http://q53wkmg88.bkt.clouddn.com/3.png" alt="Loading" />
        </div>
        <div className={styles.container}>
          <img src="http://q53wkmg88.bkt.clouddn.com/4.png" alt="Loading" />
        </div>
      </Carousel>
    </Card>
  </PageHeaderWrapper>
);
