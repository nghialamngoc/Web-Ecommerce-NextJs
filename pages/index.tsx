import axios from '../services/axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeTemplate from '../templates/home'
import ProductList from '../components/ProductList'
import homeBannerData from '../public/data/homeBanner.json'
import homeProductListData from '../public/data/homeProductList.json'
import CONFIG from '../constants/config'

const HomePage: NextPage<IHomePageProps> = ({ sliderData, productList }) => {
  return (
    <HomeTemplate sliderData={sliderData}>
      <div className={styles.container}>
        <Head>
          <title>Trang chủ</title>
          <meta name="description" content="Trang chủ" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProductList
          total={productList?.total}
          data={productList?.list}
          title="SẢN PHẨM NỔI BẬT"
        ></ProductList>
      </div>
    </HomeTemplate>
  )
}

export async function getServerSideProps() {
  try {
    // TODO: replace
    // const banner = await axios.get('http://localhost:4000/homeBanner')
    // const productList = await axios.get('http://localhost:4000/homeProductList')
    return {
      props: {
        sliderData: homeBannerData,
        productList: homeProductListData,
      },
    }
  } catch (err) {
    return {
      props: {},
    }
  }
}

export default HomePage
