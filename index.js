import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import AboutPage from './about';
import ContactUs from './contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcom to Huntig Coders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next js hunting blog, hunting coders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
      <div className={styles.leftside}>
        <h1 className={styles.heading}>Welcome to Hunting Coders</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
      </div>
      <div className={styles.rightside}>
        <Image
          src="/zzz.avif" // Use a valid file name without spaces
          alt="Image"
          className={styles.image}
          width={500}
          height={500}
        />
        
      </div>

    </div>


    <div>
    <AboutPage />
    </div>
    <div>
      <ContactUs/>
    </div>
  <footer className={styles.footer}>
        <h5>&copy; www.Zeeshan Muhammad || All Right Reserved</h5>
    </footer>

      </main>
    </>
  );
}
