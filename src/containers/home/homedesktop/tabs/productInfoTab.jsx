//@flow

import React from 'react'
import { Link } from 'react-router-dom'

import Tabs from 'components/common/Tabs'
import ProductDescriptionTable from 'components/productDescriptionTable'

import { SEARCH_IMG, WHITE_VS_ICN, CLOSE_IMG } from 'common/images'

type Props = {
    tabList: Array<Object>,
    activeTab: string,
    productID: string,
    specifications: Object,
    versiondetail: Object,
    attributeItems: Array<string>,
    closebutton: boolean,
    isDescModalVisible: boolean,

    onProductTabChange: (val: string, val: string, val: string) => any,
    onProductColorSelect: (event: any) => any,
    onVsItemClick: () => any
}

const ProductInfoTab = (props: Props) => {
    const {
        tabList,
        activeTab,
        productID,
        specifications,
        versiondetail,
        attributeItems,
        closebutton,
        isDescModalVisible,

        onProductTabChange,
        onProductColorSelect,
        onVsItemClick
    } = props;

    const getAttributeByName = (value) => {

        if (attributeItems !== "undefined" || attributeItems.length != 0) {
            var count = 0;
            var check = attributeItems.includes(value);
            if (check) {
                var object = document.getElementById(value);
                object.scrollIntoView(true, { behavior: 'smooth' });
            } else {
                var object = document.getElementById("panepart0");
                object.scrollIntoView(true, { behavior: 'smooth' });
            }
        }
    }


    return (
        <div className="spec-container">
            <div className="iphn-tab">
                <Tabs
                    tabList={tabList}
                    onTabChange={onProductTabChange}
                    activeTab={activeTab}
                    productID={productID}
                />

                <div className="suggest_btn">
                    <img src={SEARCH_IMG} />
                    <input type="text" className="searchTerm" placeholder="Find a Spec..." onChange={(e) => getAttributeByName(e.target.value)} />
                    <img className="close_size" src={CLOSE_IMG} />
                </div>

                <ProductDescriptionTable
                    onProductColorSelect={onProductColorSelect}
                    paneList={specifications}
                    versionDetailState={versiondetail}
                    attributeItems={attributeItems}
                    closebutton={closebutton}
                />
            </div>
            <div className={isDescModalVisible ? "plus_toggle plus_toggle_fixed" : "plus_toggle"} onClick={onVsItemClick}>
                <Link to="">
                    <span>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                </Link>
                <img src={WHITE_VS_ICN} alt="versus-icon" />
            </div>
        </div>
    )
}
export default ProductInfoTab
