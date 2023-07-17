import type { AppProps } from 'next/app'
import Layout from './components/layout';
import "../styles/globals.css"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        {/* Component is parameter for Layout (children) */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
