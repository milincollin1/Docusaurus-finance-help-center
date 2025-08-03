import React from 'react';
import Layout from '@theme/Layout';
import AdInline from '@site/src/components/AdInline';

export default function Home() {
  return (
    <Layout
      title="Finance Help Center"
      description="Your guide to managing money wisely"
    >
      <main style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>Finance Help Center</h1>
        <p>Your guide to budgeting, saving, and investing</p>
        <AdInline />
      </main>
    </Layout>
  );
}
