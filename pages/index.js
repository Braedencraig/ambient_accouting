import Head from "next/head";
import Image from "next/image";
import { Playfair_Display } from "@next/font/google";
import styles from "../styles/Home.module.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="ambient accounting,ambient bookkeeping,bookkeeping,accounting,accountant,taxes"
        />
        <meta
          name="description"
          content="Ambient Accouting based in Toronto, ON. We provide bookkeeping and accounting services for small businesses."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Ambient Accouting" />
        <meta
          property="og:description"
          content="Ambient Accouting based in Toronto, ON. We provide bookkeeping and accounting services for small businesses."
        />
        <meta
          property="og:image"
          content="https://ambientaccounting.ca/ambient-accounting.jpg"
        />
        <link rel="canonical" href="https://ambientaccounting.ca/" />
        <title> Ambient Accouting </title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={playfair.className}>Ambient Accounting</h1>
        <Image
          src="/ambient-accounting.jpg"
          alt="Ambient Accounting Logo"
          // className={styles.vercelLogo}
          width={500}
          height={500}
          priority
        />
        <h2 className={playfair.className}>Accounting as Assurance.</h2>
      </main>
      <footer className={playfair.className}>
        <a href="mailto:info@ambientaccounting.ca">info@ambientaccounting.ca</a>
      </footer>
    </>
  );
}
