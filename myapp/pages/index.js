import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

import Layout from '../Components/Layout';

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>
          Hi Hello
        </title>
      </Head>
      <h1>
        hello, Next.js
      </h1>
      <div>
        <button onClick={() => Router.push('/search?keyword=something')}>Search something</button>
      </div>
    </Layout>
  );
};

export default Index;
