import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeTemplate from '../templates/home'

const Home: NextPage = () => {
  return (
    <HomeTemplate>
      <div className={styles.container}>
        <Head>
          <title>Trang chủ</title>
          <meta name="description" content="Trang chủ" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </HomeTemplate>
  )
}

export default Home
