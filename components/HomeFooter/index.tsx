import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/layout'
import { NextPage } from 'next'
import CONFIG from '../../constants/config'
import styles from './HomeFooter.module.scss'

const HomeFooter: NextPage = () => {
  return (
    <Flex justifyContent="center" bg="#f9f9f9" fontSize="14px">
      <Box w="100%" maxW="1274px" alignItems="center" justifyContent="center" padding={{
        md: '20px'
      }}>
        <Grid
          templateColumns={{ md: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(6, 1fr)' }}
          gap={6}
        >
          <GridItem
            w="100%"
            colSpan={{
              md: 1,
              lg: 3,
              xl: 4,
            }}
          >
            <Grid templateColumns="repeat(3, 1fr)" gap={6} mb="25px">
              <GridItem w="100%">
                <Image
                  src={`${CONFIG.imgBaseUrl}1428355432291766272/images/22222.svg`}
                  alt=""
                  w="130px"
                />
              </GridItem>
              <GridItem w="100%">
                <Box>
                  <Box className={styles.title}>VỀ CHÚNG TÔI</Box>
                  <ul className={styles['list-item']}>
                    <li>
                      <a href="/chinh-sach#dieu-khoan-su-dung">
                        Điều khoản sử dụng
                      </a>
                    </li>
                    <li>
                      <a href="/chinh-sach#chinh-sach-bao-mat">
                        Chính sách bảo mật
                      </a>
                    </li>
                  </ul>
                </Box>
              </GridItem>
              <GridItem w="100%">
                <Box>
                  <Box className={styles.title}>HỖ TRỢ KHÁCH HÀNG</Box>
                  <ul className={styles['list-item']}>
                    <li>
                      <a href="/chinh-sach">Chính sách đổi / trả</a>
                    </li>
                    <li>
                      <a href="/chinh-sach#chinh-sach-bao-hanh">
                        Chính sách bảo hành
                      </a>
                    </li>
                  </ul>
                </Box>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem w="100%">
                <Box>
                  <Box className={styles.title}>DỊCH VỤ KHÁCH HÀNG</Box>
                  <ul className={styles['list-item']}>
                    <li>
                      <a href="tel:08 77 74 7777">
                        Mua hàng online: <strong>08 77 74 7777</strong>
                      </a>
                    </li>
                    <li>
                      <a href="tel:0376 201 735">
                        Góp ý, khiếu nại: <strong>0376 201 735</strong>
                      </a>
                    </li>
                  </ul>
                </Box>
              </GridItem>
              <GridItem w="100%">
                <Box>
                  <Box className={styles.title}>PHƯƠNG THỨC THANH TOÁN</Box>
                  <ul className={styles['list-item']}>
                    <li>
                      <Flex alignItems="center">
                        <Image
                          src={`${CONFIG.imgBaseUrl}1428355432291766272/images/money.svg`}
                          alt=""
                          mr="5px"
                        />
                        Tiền mặt
                      </Flex>
                    </li>
                  </ul>
                </Box>
              </GridItem>
              <GridItem w="100%">
                <Box>
                  <Image
                    src={`${CONFIG.imgBaseUrl}1428355432291766272/images/bo-cong-thuong.svg`}
                    alt=""
                  />
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            w="100%"
            colSpan={{
              md: 1,
              lg: 1,
              xl: 2,
            }}
          >
            <Flex flexDir="column">
              <Box className={styles.title}>KẾT NỐI VỚI CHÚNG TÔI</Box>
              <ul className={styles['list-item__socials']}>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/HappyHow.me"
                  >
                    <Image
                      src={`${CONFIG.imgBaseUrl}1428355432291766272/images/icon-facebook.svg`}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCwbTaxyQ4I0JR0oF7NJ8Ocg"
                  >
                    <Image
                      src={`${CONFIG.imgBaseUrl}1428355432291766272/images/icon-youtube.svg`}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/happyhow.me/"
                  >
                    <Image
                      src={`${CONFIG.imgBaseUrl}1428355432291766272/images/icon-insta.svg`}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/@poloman.happyhow?lang=vi-VN"
                  >
                    <Image
                      src={`${CONFIG.imgBaseUrl}1428355432291766272/images/icon-tiktok.svg`}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="tel:08 77 74 7777">
                    <Image
                      src={`${CONFIG.imgBaseUrl}1428355432291766272/images/icon-zalo.svg`}
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </Flex>
            <Box mt="30px">
              <Box className={styles.title}>ĐĂNG KÝ NHẬN TIN TỪ HAPPYHOW</Box>
              <Box>
                <InputGroup>
                  <Input
                    id="email-footer"
                    type="text"
                    placeholder="Địa chỉ email của bạn"
                    fontSize="14px"
                  />
                  <InputRightAddon bg="black" color="white" cursor="pointer">
                    Áp dụng
                  </InputRightAddon>
                </InputGroup>
              </Box>
            </Box>
          </GridItem>
        </Grid>
        <Box mt="30px">
          <Box fontWeight="bold">© 2021 HAPPYHOW</Box>
          <Box fontSize="13px">
            CÔNG TY TNHH HAPPYHOW - 123 BỜ BAO TÂN THẮNG, P. SƠN KỲ, Q. TÂN PHÚ,
            TP. HỒ CHÍ MINH | MÃ SỐ THUẾ 0316957194 CẤP NGÀY 10/09/2021
          </Box>
        </Box>

        <br></br>
      </Box>
    </Flex>
  )
}

export default HomeFooter
