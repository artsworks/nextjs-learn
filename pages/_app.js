import '../styles/global.css';
import '../styles/page.css';
import '../styles/card.css';
import '../styles/form.css';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
