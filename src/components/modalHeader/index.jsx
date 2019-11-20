//@flow

import React from 'react'
import StarRating from 'components/common/starRating'

import { SUGGEST_IMG, SHARE_IMG } from 'common/images'
import './styles.scss'

type Props = {
  isArrowClicked: boolean,
  deviceName: string,
  onArrowClick: () => any,
  onShareClick: () => any
}

const ModalHeader = (props: Props) => {
  const { onArrowClick, isArrowClicked, deviceName, onShareClick } = props
  return (
    <div className="iphn-hed">
      <div className="wrap_radio">
        <span className="device-name">{deviceName}</span>

        <div className="sug_share">
          <div className="suggest_part">
            <img src={SUGGEST_IMG} />
            <b className="suggest_title">Suggest Edit</b>
          </div>

          <div className="share_part">
            <img src={SHARE_IMG} onClick={onShareClick} />
            <b className="share_title">Share</b>
          </div>

        </div>
      </div>

      <div className="star-rating">
        <StarRating
          rating={4.5} />
        <span>Based on <b>32</b> reviews.</span>
      </div>

      <div className="click_drp">
        <span className="iphn-swt" onClick={onArrowClick}>
          <i className={isArrowClicked ? 'fa fa-angle-up' : 'fa fa-angle-down'}
            aria-hidden="true"
          ></i>
        </span>
      </div>
    </div>
  )
}
export default ModalHeader
