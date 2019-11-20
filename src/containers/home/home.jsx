import React from 'react'
import { connect } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import DeskTopHome from 'containers/home/homedesktop/index.jsx'
import MobileHome from 'containers/home/homemobile/index.jsx'
import TabletHome from 'containers/home/hometablet/index.jsx'
import './styles.css'
import { trendingProductType } from 'common/types'
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 800 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 801 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 425 })
  return isMobile ? children : null
}

type Props = {
  history: {
    push: (path: string) => any
  },
  dispatch: ({ type: string, payload: any }) => any,
  deviceByName: Array<Object>,
  categories: Array<Object>,
  brands: Array<Object>,
  versionDetailState: Object,
  trendingProducts: Array<trendingProductType>,
  smartPhoneDetails: Object,
  cbfilteredProducts: Array<Object>
}
class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { history, dispatch, deviceByName, categories, brands, versionDetailState, smartPhoneDetails, relatedProductsToDevice, trendingProducts, cbfilteredProducts } = this.props
    
    return (
      <div className="home-style">
        <Desktop>
          <DeskTopHome
            history={history}
            dispatch={dispatch}
            deviceByName={deviceByName}
            categories={categories}
            brands={brands}
            versionDetailState={versionDetailState}
            smartPhoneDetails={smartPhoneDetails}
            trendingProducts={trendingProducts}
          />
        </Desktop>
        <Tablet>
          <TabletHome
          />
        </Tablet>
        <Mobile>
          <MobileHome />
        </Mobile>

      </div >
    )
  }
}
const mapStateToProps = state => {
  return {
    trendingProducts: state.trendingProducts.trendingProducts.trending,
    deviceByName: state.deviceByName,
    categories: state.categories,
    brands: state.brands,
    smartPhoneDetails: state.smartPhoneDetails,
    versionDetailState: state.versionDetail

  }
}
export default connect(mapStateToProps)(Home)