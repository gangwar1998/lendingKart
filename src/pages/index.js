import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lending Kart</title>
      </Head>
      <div className={styles.container}>
        <iframe
          src="https://kloudfins-los-dev-ed.my.site.com/dsaportal/s/"
          frameBorder="0"
          allowFullScreen
          title="Lending Kart"
        />
      </div>
    </>
  );
}
