import { Image } from '@chakra-ui/image'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/layout'
import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import CONFIG from '../../constants/config'
import { getHomePageTopBanner } from '../../services/homePage'

const HomeTopBanner: NextPage = () => {
  const [isExpired, setIsExpired] = useState(false)
  const [timer, setTimer] = useState<any>(null)
  const [data, setData] = useState<IHomePageTopBanner>({})
  const [rDay, setRDay] = useState(0)
  const [rHour, setRHour] = useState(0)
  const [rMin, setRMin] = useState(0)
  const [rSec, setRSec] = useState(0)

  const getTime = useCallback(() => {
    if (!data.endDate) {
      return
    }

    try {
      var dateParts: string[] = data.endDate.split('/')

      var dateObject = new Date(
        +dateParts[2],
        Number(dateParts[1]) - 1,
        +dateParts[0]
      )

      const endDate = new Date(dateObject)
      const difference = endDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        setRDay(0)
        setRHour(0)
        setRMin(0)
        setRSec(0)
        setIsExpired(true)
        return
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setRDay(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setRHour(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setRMin(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setRSec(s)
    } catch (err) {
      setRDay(0)
      setRHour(0)
      setRMin(0)
      setRSec(0)
      setIsExpired(true)
      return
    }
  }, [data])

  const fetchData = async () => {
    try {
      const res = await getHomePageTopBanner()
      setData(res)
    } catch (err) {
      //
    }
  }

  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
      return
    }

    getTime()
    const i = setInterval(getTime, 1000)
    setTimer(i)
    return () => clearInterval(i)
  }, [getTime, data])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (isExpired && timer) {
      clearInterval(timer)
    }
  }, [isExpired, timer])

  if (!data || Object.keys(data).length === 0) {
    return <></>
  }

  return (
    <Flex justifyContent="center" bg="black" color="white">
      <Flex
        className="container"
        w="100%"
        maxW="1274px"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        padding="10px"
      >
        <Grid w="100%" templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem w="100%">
            <Flex h="100%" alignItems="center">
              <Image
                src={`${CONFIG.imgBaseUrl}/images/cart-white.svg`}
                alt=""
                marginRight="5px"
                width="18px"
              />
              <Box fontSize="14px">Kiểm tra đơn hàng</Box>
            </Flex>
          </GridItem>
          <GridItem w="100%" colSpan={2}>
            <Flex alignItems="center" justifyContent="center">
              <strong>{data.content}</strong>
              <Box marginLeft="5px" fontSize={13}>
                NGÀY SỬ DỤNG: ( {data.startDate} - {data.endDate} )
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDir="row" justifyContent="flex-end" fontWeight="bold">
              <Box margin="0 5px"> {rDay} </Box>
              <Box marginRight="5px"> D </Box>:
              <Box margin="0 5px"> {('0' + rHour).slice(-2)} </Box>
              <Box marginRight="5px"> H </Box>:
              <Box margin="0 5px"> {('0' + rMin).slice(-2)} </Box>
              <Box marginRight="5px"> M </Box>:
              <Box margin="0 5px"> {('0' + rSec).slice(-2)} </Box>
              <Box> S </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default HomeTopBanner
