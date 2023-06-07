import React from 'react';
import { Helmet } from 'react-helmet';
type MetaProps = {
    title: string;
}
export default function Meta({ title }: MetaProps) {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
  )
}