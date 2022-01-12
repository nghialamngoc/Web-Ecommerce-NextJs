import { Box, Flex, Grid, GridItem } from '@chakra-ui/layout'
import { NextPage } from 'next'
import Product from '../Product'

const IProductList: NextPage<IProductListProps> = ({ data, title }) => {
  if (!data && !Array.isArray(data)) {
    return <></>
  }

  return (
    <Flex justifyContent="center" marginTop="100px">
      <Flex
        w={{
          lg: 1242,
        }}
        flexDir="column"
        textAlign="center"
      >
        {title && <Box fontSize="30px" fontWeight="600" marginBottom="24px">{title}</Box>}
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.list.map((x, index) => {
            return (
              <GridItem key={index}>
                <Product data={x}></Product>
              </GridItem>
            )
          })}
        </Grid>
      </Flex>
    </Flex>
  )
}

export default IProductList
