import "@/styles/globals.css";
import Script from "next/script";

// import Context from "../../components/appcontext";
import { CookiesProvider } from 'react-cookie'
export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      
      <Component {...pageProps} />
    </CookiesProvider>
  );
}
