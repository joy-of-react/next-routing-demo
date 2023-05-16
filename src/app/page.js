import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <main>
      <h1>Welcome to my website!</h1>
      <p>
        To learn more about this website, visit
        our <Link href="/about">About Page</Link>.
      </p>
    </main>
  );
}

export default Home;
