import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import dynamic from 'next/dynamic';
const DynamicReCaptchaProvider = dynamic(() =>
  import('next-recaptcha-v3').then((module) => module.ReCaptchaProvider)
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* @ts-ignore */
    <DynamicReCaptchaProvider
      reCaptchaKey="6LdjR8ooAAAAADJdgx5yFve6-45QgTcMyB_51y8V"
      useEnterprise
    >
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </DynamicReCaptchaProvider>
  );
}

export default MyApp;
