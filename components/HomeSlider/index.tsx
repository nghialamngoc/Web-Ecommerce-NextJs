import { Image } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

const HomeSlider: NextPage<HomePageSliderProps> = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <></>
  }

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        loop={true}
        className="mySwiper"
      >
        {data.map((x: IHomePageBanner, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Link href={x.url || '/'} passHref>
                <Image src={x.image} alt={x.alt}></Image>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default HomeSlider
