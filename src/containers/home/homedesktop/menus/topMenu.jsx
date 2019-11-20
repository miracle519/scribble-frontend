import React, { Component } from 'react'
import { connect } from 'react-redux'

import RelatedProducts from 'components/relatedProducts';
import ModalHeader from 'components/modalHeader';

import { GET_RELATED_PRODUCTS } from 'common/constants';

type ITopMenuContainer = {
    categoryID: string;
    relatedProducts: Array<Object>,
    productDetailItem: Object
}

class TopMenuContainer<ITopMenuContainer> extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showRelatedProducts: false
        };
    }

    handleGetRelatedProductsClick = () => {
        if (this.props.categoryID !== '') {
            this.props.getRelatedProducts(this.props.categoryID);
            this.setState({ showRelatedProducts: !this.state.showRelatedProducts })
        }
    }

    render() {
        const { showRelatedProducts } = this.state;
        const { productDetailItem, onShareClick } = this.props;
        return (
            <React.Fragment>
                <ModalHeader
                    onArrowClick={this.handleGetRelatedProductsClick}
                    isArrowClicked={this.state.showRelatedProducts}
                    onShareClick={onShareClick}
                    deviceName={typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.name : ""}
                />
                {
                    showRelatedProducts &&
                    <RelatedProducts relatedProductsData={this.props.relatedProducts} />
                }
            </React.Fragment>
        )
    }
}

const mapState = (state) => {
    return {
        relatedProducts: state.relatedProducts
    }
}

const mapDispatch = (dispatch) => {
    return {
        getRelatedProducts: (categoryID) => {
            dispatch({
                type: 'GET_RELATED_PRODUCTS',
                payload: {
                    url: GET_RELATED_PRODUCTS,
                    categoryID: categoryID
                }
            })
        }
    }
}

const TopMenu = connect(mapState, mapDispatch)(TopMenuContainer);
export default TopMenu;