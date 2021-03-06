import { Form } from 'antd';
import React from 'react';
import classNames from 'classnames';
import { FormInstance } from 'antd/es/form';
import { LoginParamsType } from '@/services/login';
import LoginItem, { LoginItemProps } from './item';
import LoginSubmit from './submit';
import styles from './index.less';

export interface LoginProps {
  style?: React.CSSProperties;
  onSubmit?: (values: LoginParamsType) => void;
  className?: string;
  form?: FormInstance;
  children: React.ReactNode;
}

interface LoginType extends React.FC<LoginProps> {
  Submit: typeof LoginSubmit;
  UserName: React.FunctionComponent<LoginItemProps>;
  Password: React.FunctionComponent<LoginItemProps>;
}

const Login: LoginType = props => {
  const { className } = props;

  return (
    <div className={classNames(className, styles.login)}>
      <Form
        form={props.form}
        onFinish={values => {
          if (props.onSubmit) {
            props.onSubmit(values as LoginParamsType);
          }
        }}
      >
        {props.children}
      </Form>
    </div>
  );
};

Login.Submit = LoginSubmit;
Login.UserName = LoginItem.UserName;
Login.Password = LoginItem.Password;

export default Login;
