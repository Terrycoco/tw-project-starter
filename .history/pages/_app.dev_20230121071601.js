import { Raleway } from "@next/font/google";
import "../styles/globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --lora-font: ${lora.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
