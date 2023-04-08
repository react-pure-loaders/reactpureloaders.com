import React from 'react';
import Link from 'next/link';

const Custom404 = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Ops, nothing here!</h1>
    <p>This page will be build in the future</p>
    <Link href="/">Click here to return home</Link>
  </div>
);

export default Custom404;
