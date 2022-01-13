interface IHomePageTopBanner {
  content?: string
  startDate?: string
  endDate?: string
}

interface IHomePageBanner {
  url?: string
  image?: string
  alt?: string
}

// Start Product Interface
interface Product {
  product_id: string
  url: string
  name: string
  is_new: boolean
  is_best: boolean
  list_variation: IProductVariation[]
}

interface IProductVariation {
  product_id: string
  image: string
  imageIcon: string
  price: number
  discount_price: number
  remain_quantity: number
}

interface IProductList {
  total: number
  list: Product[]
}

// End Product Interface

interface IHomePageProps {
  sliderData?: IHomePageBanner[]
  productList?: IProductList
}

interface IHomePageTemplateProps {
  sliderData?: IHomePageBanner[]
  hasSlider?: boolean
}

interface HomePageSliderProps {
  data: IHomePageBanner[]
}

interface IProductListProps {
  total?: number
  data?: Product[]
  title?: string
  scrollable?: boolean
  getMoreUrl?: string
}

interface IProductProps {
  data?: Product
}
