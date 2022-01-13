import { Image } from '@chakra-ui/image'
import { Box, Grid, GridItem } from '@chakra-ui/layout'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import { useMemo, useState } from 'react'
import CONFIG from '../../constants/config'
import { formatMoney } from '../../helpers/format'
import styles from './Product.module.scss'

const Product: NextPage<IProductProps> = ({ data }) => {
  const [variationSelected, setVariationSelected] =
    useState<IProductVariation | null>(null)

  const onSelectVariation = (variation: IProductVariation) => {
    console.log(variation);
    
    setVariationSelected(variation)
  }

  const isOutOfStock = useMemo(() => {
    if (data?.list_variation && data.list_variation.length > 0) {
      return data.list_variation.every(
        (x) => !x.remain_quantity || x.remain_quantity <= 0
      )
    }

    return true
  }, [data?.list_variation])

  return (
    <div className={styles.product}>
      <div className={styles['product-top']}>
        {isOutOfStock && (
          <Box className={styles['product-top__out-stock']}></Box>
        )}
        <Box className={styles['product-top__image']}>
          <Image
            src={
              variationSelected
                ? variationSelected.image
                : data?.list_variation[0].image
            }
            alt={data?.name}
          />
        </Box>

        {data?.is_new && <div className={styles['new-tag']}>New</div>}
        {data?.is_best && <div className={styles['best-tag']}>Best seller</div>}
        <a href="#" className={styles['product-top__like']}>
          <FontAwesomeIcon icon={faHeart} className={styles['heart-icon']} />
        </a>
        <a
          href="#"
          className={styles['product-top__cart']}
          data-bs-toggle="modal"
          data-bs-target="#addToCartModal1"
        >
          <Image
            src={`${CONFIG.imgBaseUrl}/1428355432291766272/d/images/pd-cart-icon.svg`}
            alt=""
          />
        </a>
      </div>
      <div className={styles['product-bottom']}>
        <p className={styles['product-bottom__title']}>
          <a href="/san-pham/ao-polo-basic-nylo-gam-mau-trendy">{data?.name}</a>
        </p>
        <Grid
          templateColumns="repeat(8, 1fr)"
          className={styles['product-bottom__colors']}
        >
          {data?.list_variation.map((x, index) => {
            return (
              <GridItem key={index}>
                <Box
                  style={{
                    backgroundImage: `url(${x.imageIcon})`,
                  }}
                  className={`${styles['variation-icon']} ${
                    variationSelected &&
                    variationSelected.product_id === x.product_id
                      ? styles['variation-icon__active']
                      : ''
                  }`}
                  onClick={() => onSelectVariation(x)}
                ></Box>
              </GridItem>
            )
          })}
        </Grid>

        <p className={styles['product-bottom__price']}>
          <span className={styles['product-bottom__price-new']}>
            {variationSelected
              ? formatMoney(
                  variationSelected.discount_price || variationSelected.price
                )
              : formatMoney(
                  data?.list_variation[0].discount_price ||
                    data?.list_variation[0].price ||
                    0
                )}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Product
