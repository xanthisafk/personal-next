import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar/Navbar.tsx';


export default function Home() {
  return (
    <>
      <Head>
        {/* Primary meta tags */}
        <title>Abhinav Shrivastava</title>
        <meta name="title" content="Abhinav Shrivastava - Let's get your project started" />
        <meta name="description" content="Abhinav Shrivastava is building software and web-related projects that use bleeding-edge technologies." />
        <meta name="keywords" content="software, developer, engineer, software engineer, web developer, web dev, web dev for hire, software developer for hire, cheap discord bots, cheap website in India, cheap software in India, full stack, full stack developer, front end, front end developer, back end developer, back end engineer, frontend, frontend developer, backend developer, backend engineer, frontend engineer, front end engineer, SQL, MySQL, database, SQL server, MySQL, Microsoft SQL, dba, database admin, " />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Abhinav Shrivastava" />

        {/* Facebook open graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xanthis.in/" />
        <meta property="og:title" content="Abhinav Shrivastava - Let's get your project started" />
        <meta property="og:description" content="Abhinav Shrivastava is building software and web-related projects that use bleeding-edge technologies." />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://xanthis.in/" />
        <meta property="twitter:title" content="Abhinav Shrivastava - Let's get your project started" />
        <meta property="twitter:description" content="Abhinav Shrivastava is building software and web-related projects that use bleeding-edge technologies." />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={styles.main} />
    </>
  )
}
