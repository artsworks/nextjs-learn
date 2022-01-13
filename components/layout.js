import Head from 'next/head';

import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="page">
      <Head>
        <title>AK Labs | Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
