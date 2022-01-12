import axios from '../../services/axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import HomeTemplate from '../../templates/home'

const HomePage: NextPage<IHomePageProps> = ({ sliderData }) => {
  return (
    <HomeTemplate sliderData={sliderData} hasSlider={false}>
      <div className={styles.container}>
        <Head>
          <title>New In</title>
          <meta name="description" content="Trang chủ" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </HomeTemplate>
  )
}

export async function getServerSideProps() {
  const banner = await axios.get('http://localhost:4000/homeBanner')
  
  return {
    props: {
      sliderData: banner,
    },
  }
}

export default HomePage
