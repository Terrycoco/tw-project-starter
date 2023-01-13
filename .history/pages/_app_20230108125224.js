// import '../styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async => {
      (await import ('tw-elements')).default;
    };
    use();
    }, []);

    return <Component {...pageProps} />;
  }


export default MyApp;