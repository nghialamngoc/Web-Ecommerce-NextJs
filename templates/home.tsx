import { Box, Flex } from '@chakra-ui/layout'
import { NextPage } from 'next'
import HomeFooter from '../components/HomeFooter'
import HomeTopBanner from '../components'

const HomeTemplate: NextPage = ({ children }) => {
  return (
    <Flex flexDir="column" minH="100vh" justifyContent="space-between">
      <HomeTopBanner></HomeTopBanner>
      <Box>{children}</Box>
      <HomeFooter></HomeFooter>
    </Flex>
  )
}

export default HomeTemplate
