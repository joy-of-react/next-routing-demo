import React from 'react';
import Link from 'next/link';

function AboutPage() {
  return (
    <main>
      <h1>About This Website</h1>
      <p>It is a website.</p>
      <p>
        <Link href="/">Return home</Link>
      </p>
    </main>
  );
}

export default AboutPage;
