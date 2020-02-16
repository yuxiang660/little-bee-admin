import React from 'react';
import { Result } from 'antd';
import { PageAuthorityType, filterWithAuthority } from '@/utils/page-authority';

interface AuthorityRenderProps {
  pageAuthority: PageAuthorityType;
  noMatch?: React.ReactNode;
}

const AuthorityRender: React.FunctionComponent<AuthorityRenderProps> = ({
  children,
  pageAuthority,
  noMatch = (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  ),
}) => {
  const childrenRender: React.ReactNode = typeof children === 'undefined' ? null : children;
  const dom = filterWithAuthority(pageAuthority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default AuthorityRender;
