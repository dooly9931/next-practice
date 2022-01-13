import React from 'react';

import Layout from '../Components/Layout';

const About = () => {
  return (
    <Layout>
      <style jsx>
        {`
          h2 {
            color: green
          }
        `}
      </style>
      <h2>Hi, I'm Ted.</h2>
    </Layout>
  );
};

export default About;
