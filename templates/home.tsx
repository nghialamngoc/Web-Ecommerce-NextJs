import { Box, Flex } from '@chakra-ui/layout'
import { NextPage } from 'next'
import HomeFooter from '../components/HomeFooter'
import HomeSlider from '../components/HomeSlider'
import HomeTopBanner from '../components/HomeTopBanner'
import NavBar from '../components/NavBar'

const HomeTemplate: NextPage<IHomePageTemplateProps> = ({
  sliderData,
  hasSlider = true,
  children,
}) => {
  return (
    <Flex flexDir="column" minH="100vh" justifyContent="space-between">
      <Box>
        <HomeTopBanner></HomeTopBanner>
        <NavBar></NavBar>
        {hasSlider && <HomeSlider data={sliderData || []}></HomeSlider>}
      </Box>
      <Box mb={20}>{children}</Box>
      <HomeFooter></HomeFooter>
    </Flex>
  )
}

export default HomeTemplate
