//@flow

import React, { useState } from 'react'
import ModalSideBarInfo from 'components/modalSidebar/modalSidebarInfo'
import ReviewContainer from 'components/reviewContainer'
import SideBarSelect from './sideBarSelect'
import TopMenu from './menus/topMenu'
import ProductInfoTab from './tabs/productInfoTab'
import ModalSideBarReview from 'components/modalSidebar/modalSidebarReview'

import { sideTabs } from './constants'

import './styles.scss'
import './hiddenoverflow.scss'

type SocialAppType = { socialName: string, className: string }

type Props = {
  onShortedProductClick: (val: any) => any,
  onAdvanceSearhClick: (val: any) => any,
  onProductTabChange: (val: string, val: string, val: string) => any,
  activeTab: string,
  onProductColorSelect: (event: any) => any,
  onModalOuterClick: (event: any) => any,
  socialApp: Array<SocialAppType>,
  isArrowClicked: boolean,
  productDetailItem: Object,
  callbackHome: (data: number) => any,
  versionDetailState: Object,
  attributeItems: Array<string>,
  closebutton: boolean,
  categoryID: string,
  backPart: boolean,
  linkPart: boolean,
  embeddedPart: boolean,
  isDescModalVisible: boolean,
  convertToversionDetail: (val: any, val: any) => any,
  onFBClick: () => any,
  onTwitterClick: () => any,
  onLinkClick: () => any,
  onEmbeddedClick: () => any,
  onAllBackClick: () => any,
  onVsItemClick: () => any
}

const ProductDescriptionModal = (props: Props) => {
  const {
    socialApp,
    onProductTabChange,
    activeTab,
    onProductColorSelect,
    productDetailMenu2,
    onModalOuterClick,
    isArrowClicked,
    productDetailItem,
    versionDetailState,
    attributeItems,
    closebutton,
    categoryID,
    convertToversionDetail1,
    backPart,
    linkPart,
    embeddedPart,
    onFBClick,
    onTwitterClick,
    onLinkClick,
    onEmbeddedClick,
    onAllBackClick,
    isDescModalVisible,
    onVsItemClick,
  } = props;

  const [sidenav, setSideNav] = useState(0);

  const images = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.images : [];
  const versions = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.version : [];
  const activedVersionTab = typeof versions[0] !== "undefined" ? versions[0].version_name : '';

  // NEW 
  const [sideTab, setSideTab] = useState(sideTabs.info);
  const [showSocialShareModal, setShowSocialShareModal] = useState(false);
  const specifications = productDetailItem.smartPhoneDetails.result ? productDetailItem.smartPhoneDetails.result.specification : {};
  const versiondetail = versionDetailState.versionDetailState.result ? versionDetailState.versionDetailState.result.specification : {};

  convertToversionDetail1(versions, specifications)
  const callbackFunction = (data = 0) => {
    setSideNav(data)
    props.callbackHome(data)
  }

  // NEW
  const handleMenuClick = value => {
    if (value !== sideTab) {
      setSideTab(value);
    }
  }

  const handleModalOuterClick = (e) => {
    var frame = document.getElementById('outer-frame');
    if (document.elementFromPoint(e.clientX, e.clientY) == frame) {
      onModalOuterClick(e);
    }
  }

  return (
    <div
      id="outer-frame"
      className={isDescModalVisible ? "iphone left0" : "iphone"} onClick={handleModalOuterClick}>
      <SideBarSelect
        activeTab={sideTab}
        handleMenuClick={handleMenuClick} />
      {
        sideTab == sideTabs.info &&
        <ModalSideBarInfo
          deviceImage={images[0] ? images[0].name.original : ""}
          specifications={specifications}
          menuDetails={productDetailMenu2}

          socialApp={socialApp}
          parentCallback={callbackFunction}
        />
      }
      {
        sideTab === sideTabs.review &&
        <ModalSideBarReview
          deviceImage={images[0] ? images[0].name.original : ""}
        />
      }


      <div className="iphn-rgt">
        <TopMenu
          categoryID={props.categoryID}
          onShareClick={setShowSocialShareModal.bind({}, !showSocialShareModal)}
          productDetailItem={productDetailItem} />

        {
          sideTab == sideTabs.info &&
          <ProductInfoTab
            tabList={versions}
            activeTab={activeTab}
            productID={productDetailItem.smartPhoneDetails.result ? productDetailItem.smartPhoneDetails.result.product_id : ""}
            specifications={specifications}
            versiondetail={versiondetail}
            attributeItems={attributeItems}
            closebutton={closebutton}
            isDescModalVisible={closebutton}

            onProductTabChange={onProductTabChange}
            onProductColorSelect={onProductColorSelect}
            onVsItemClick={onVsItemClick}
          />
        }
        {sideTab === sideTabs.review && <ReviewContainer />}
        {/* {sidenav === 2 && <ProductVideos />}
        {sidenav === 3 && <CommentContainer />} */}
      </div>
      {
        showSocialShareModal && (
          <div className="social_part">
            {
              backPart ? <div className="back_part" onClick={onAllBackClick}>
                <i className="fa fa-angle-left icon_size" />
                <b className="back_title" >Back</b>
              </div> : null
            }

            <div className="share_social_part" id="social">
              <div className="face_style" onClick={onFBClick}>
                <i className="fa fa-facebook-f face_name"></i>
              </div>
              <div className="face_style twitter" onClick={onTwitterClick}>
                <i className="fa fa-twitter face_name"></i>
              </div>
              <div className="face_style chain" onClick={onLinkClick}>
                <i className="fa fa-link face_name"></i>
              </div>
              <div className="face_style embed" onClick={onEmbeddedClick}>
                <i className="fa fa-code face_name"></i>
              </div>
            </div>
            {
              linkPart ? <div className="link_part">
                <p>Link has been copied.</p>
              </div> : null
            }

            {
              !embeddedPart ? <div className="bottom_part">
                <div className="bottom_part1">

                </div>
                <div className="bottom_part2">
                  <p>Embed code has been copied.</p>
                </div>
              </div> : null
            }

          </div>
        )
      }

    </div >
  )
}
export default ProductDescriptionModal
