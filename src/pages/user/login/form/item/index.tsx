import { Input, Form } from 'antd';
import React from 'react';
import { FormItemProps } from 'antd/es/form/FormItem';
import ItemMap from './map';

export type WrappedLoginItemProps = LoginItemProps;
export type LoginItemKeyType = keyof typeof ItemMap;
export interface LoginItemType {
  UserName: React.FC<WrappedLoginItemProps>;
  Password: React.FC<WrappedLoginItemProps>;
}

export interface LoginItemProps extends Partial<FormItemProps> {
  name?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  customProps?: { [key: string]: unknown };
}

const FormItem = Form.Item;

const getFormItemOptions = ({ defaultValue, customProps = {}, rules }: LoginItemProps) => {
  const options: {
    rules?: LoginItemProps['rules'];
    initialValue?: LoginItemProps['defaultValue'];
  } = {
    rules: rules || (customProps.rules as LoginItemProps['rules']),
  };
  if (defaultValue) {
    options.initialValue = defaultValue;
  }
  return options;
};

const LoginItem: React.FC<LoginItemProps> = props => {
  const { customProps, rules, name, type, ...restProps } = props;

  const options = getFormItemOptions(props);
  const otherProps = restProps || {};

  return (
    <FormItem name={name} {...options}>
      <Input {...customProps} {...otherProps} />
    </FormItem>
  );
};

const LoginItems: Partial<LoginItemType> = {};

Object.keys(ItemMap).forEach(key => {
  const item = ItemMap[key];
  LoginItems[key] = (props: LoginItemProps) => (
    <LoginItem customProps={item.props} rules={item.rules} {...props} type={key} />
  );
});

export default LoginItems as LoginItemType;
