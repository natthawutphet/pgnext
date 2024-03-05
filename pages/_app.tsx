import "@/styles/globals.css";
import "@/styles/app.css";
import type { AppProps } from 'next/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
