import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>
        hello, Next.js
      </h1>
      <h2>
        <Link href="/about">
          <div style={{"text-decoration": "underline", "cursor": "pointer"}}>Intro</div>
        </Link>
      </h2>
    </div>
  );
};

export default Index;
