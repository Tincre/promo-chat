import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReCaptchaProvider
      reCaptchaKey="6LdjR8ooAAAAADJdgx5yFve6-45QgTcMyB_51y8V"
      useEnterprise
    >
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </ReCaptchaProvider>
  );
}

export default MyApp;
