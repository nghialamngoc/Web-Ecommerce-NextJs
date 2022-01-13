import { Box, Flex, Grid, GridItem } from '@chakra-ui/layout'
import axios from '../../services/axios'
import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import Product from '../Product'
import { API_PRODUCT_MORE } from '../../constants/endpoints'
import { Spinner } from '@chakra-ui/react'
import moreData from '../../public/data/homeProductMore.json'
import Link from 'next/link'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IProductList: NextPage<IProductListProps> = ({
  total = 0,
  data = [],
  title,
  scrollable,
}) => {
  const [moreData, setMoreData] = useState<Product[]>(data)
  const [page, setPage] = useState(0)
  const [loadingMore, setLoadingMore] = useState(false)

  const listener = useCallback(async () => {
    const el = document.getElementById('x-product-list')
    if (!el) {
      return
    }

    if (moreData.length >= total) {
      return
    }

    const offset = 100
    // window.pageYOffset đã scroll xuống bao nhiêu px
    // window.innerHeight chiều cao của trình duyệt
    // el.offsetTop + el.offsetHeight - window.innerHeight số px phải scroll để tới điểm cuối của element

    if (
      window.pageYOffset >
        el.offsetTop + el.offsetHeight - window.innerHeight - offset &&
      !loadingMore
    ) {
      setLoadingMore(true)
      setPage((pre) => pre + 1)
    }
  }, [loadingMore, moreData.length, total])

  useEffect(() => {
    const getMoreData = async () => {
      try {
        // TODO: replace
        // const res: Product[] = await axios.get(API_PRODUCT_MORE, {
        //   params: {
        //     _page: page,
        //     limit: 8,
        //   },
        // })

        setMoreData((pre: Product[]) => [...pre, ...moreData])
        setLoadingMore(false)
      } catch (err) {
      } finally {
      }
    }

    page > 0 && getMoreData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    if (scrollable) {
      window.addEventListener('scroll', listener)
    }

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [scrollable, listener])

  const viewMoreButton = () => {
    if (!scrollable || (!loadingMore && moreData.length >= total)) {
      return (
        <Flex
          padding="0.35rem 2rem"
          border="1px solid black"
          fontWeight="600"
          width="156px"
          alignItems="center"
        >
          <Link href="/san-pham" passHref>
            Xem thêm
          </Link>
          <Box marginLeft="5px">
            <FontAwesomeIcon
              icon={faChevronRight}
              width="9px"
            ></FontAwesomeIcon>
          </Box>
        </Flex>
      )
    }

    return ''
  }

  if (!data && !Array.isArray(data)) {
    return <></>
  }

  return (
    <>
      <Flex justifyContent="center" marginTop="100px" id="x-product-list">
        <Flex
          w={{
            lg: 1242,
          }}
          flexDir="column"
          textAlign="center"
        >
          {title && (
            <Box fontSize="30px" fontWeight="600" marginBottom="24px">
              {title}
            </Box>
          )}
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {moreData.map((x, index) => {
              return (
                <GridItem key={index}>
                  <Product data={x}></Product>
                </GridItem>
              )
            })}
          </Grid>
        </Flex>
      </Flex>
      <Flex alignItems="center" w="100%" justifyContent="center" mt="40px">
        {loadingMore && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {viewMoreButton()}
      </Flex>
    </>
  )
}

export default IProductList
