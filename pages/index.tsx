import axios from '../services/axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeTemplate from '../templates/home'
import ProductList from '../components/ProductList'

const HomePage: NextPage<IHomePageProps> = ({ sliderData, productList }) => {
  return (
    <HomeTemplate sliderData={sliderData}>
      <div className={styles.container}>
        <Head>
          <title>Trang chủ</title>
          <meta name="description" content="Trang chủ" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProductList data={productList} title="SẢN PHẨM NỔI BẬT"></ProductList>
      </div>
    </HomeTemplate>
  )
}

export async function getServerSideProps() {
  const banner = await axios.get('http://localhost:4000/homeBanner')
  const productList = await axios.get('http://localhost:4000/homeProductList')
  return {
    props: {
      sliderData: banner,
      productList: productList,
    },
  }
}

export default HomePage
