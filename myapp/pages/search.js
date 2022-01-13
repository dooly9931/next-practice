import React from 'react';
import { withRouter } from 'next/router';

import Layout from "../Components/Layout";

const Search = (props) => {
  return (
    <Layout>
      You searched for "{props.router.query.keyword}".
    </Layout>
  );
};

export default withRouter(Search);
