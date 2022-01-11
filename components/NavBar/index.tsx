import { Image } from '@chakra-ui/image'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/layout'
import { NextPage } from 'next'
import { relative } from 'path/posix'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import CONFIG from '../../constants/config'
import styles from './NavBar.module.scss'

const NavBar: NextPage = () => {
  const isLogin = false
  const cart = useSelector((state: any) => state.cart)

  const cartItems = useMemo(() => {
    return cart?.detail || []
  }, [cart])

  return (
    <Flex
      justifyContent="center"
      borderBottom="1px solid rgba(192, 194, 203, 0.5);"
      boxShadow="0 1px 5px rgb(0 0 0 / 16%);"
    >
      <Flex
        className="container"
        w="100%"
        maxW="1274px"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        padding="20px"
      >
        <Grid w="100%" templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem w="100%" h="100%">
            <Flex h="100%" alignItems="center">
              <Image
                src={`${CONFIG.imgBaseUrl}1428355432291766272/images/22222.svg`}
                alt="icon"
                w="124px"
              ></Image>
            </Flex>
          </GridItem>
          <GridItem w="100%" colSpan={2}>
            <ul className={styles.navbar}>
              <li className={styles['navbar-item']}>
                <a href="/new-in">New in</a>
              </li>
              <li className={styles['navbar-item']}>
                <a href="/san-pham">Tất cả sản phẩm</a>
              </li>
              <li className={styles['navbar-item']}>
                <a href="/community">Cộng đồng</a>
              </li>
              <li className={styles['navbar-item']}>
                <a href="/chinh-sach">Chính sách</a>
              </li>
            </ul>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDir="row" justifyContent="flex-end" alignItems="center">
              <a href="#" data-target="#header-search" className={styles.icon}>
                <Image
                  src={`${CONFIG.imgBaseUrl}1428355432291766272/d/images/search.svg`}
                  alt=""
                />
              </a>
              <a
                href="/cart"
                data-target="#aside-cart"
                id="hd-cart"
                className={styles.icon}
              >
                <Box
                  style={{
                    position: 'relative',
                  }}
                >
                  {cartItems.length ? (
                    <span className={styles['cart-count']}>
                      {cartItems.length}
                    </span>
                  ) : (
                    ''
                  )}
                  <Image
                    src={`${CONFIG.imgBaseUrl}1428355432291766272/d/images/cart.svg`}
                    alt=""
                  />
                </Box>
              </a>
              {isLogin ? (
                <a id="login-true" href="/profile" className={styles.icon}>
                  <Image
                    src={`${CONFIG.imgBaseUrl}1428355432291766272/d/images/user.svg`}
                    alt=""
                  />
                </a>
              ) : (
                <a
                  id="login-fasle"
                  href="/profile"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  data-bs-target="#loginModal"
                  className={styles.icon}
                >
                  <Image
                    src={`${CONFIG.imgBaseUrl}1428355432291766272/d/images/user.svg`}
                    alt=""
                  />
                </a>
              )}
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default NavBar
