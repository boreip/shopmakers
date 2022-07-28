import { I18nProvider } from 'next-localization';
import { useRouter } from 'next/router';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { lngDict, ...rest } = pageProps;
  const router = useRouter();

  return (
    <I18nProvider lngDict={lngDict} locale={router?.locale as string}>
      <Component {...rest} />
    </I18nProvider>
  );
}
export default App;