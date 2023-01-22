import { Raleway } from "@next/font/google";
import "../styles/globals.css";

const raleway = Raleway({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --ralewway-font: ${raleway.style.fontFamily};
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
