//@flow

import React, { useState } from 'react'

import { PHONE_IMG } from 'common/images'
import { reviewOptions } from './constants'

import './styles.scss'

type Props = {
  deviceImage: string
}

const ModalSideBarReview = (props: Props) => {
  const deviceImage = props.deviceImage || PHONE_IMG;

  const [activeReviewsTab, setActiveReviewsTab] = useState(null);

  return (
    <div className="iphn-lft">
      <div className="iphn-img">
        <img src={deviceImage} className="image-style" alt="" />
      </div>

      <div className="iphn-brand-container">
        <span className="brand-title">BRAND</span>
        <span className="brand-name">Apple</span>
      </div>

      <div className="iphn-reviews-container">
        {
          reviewOptions.map(item => {
            const isActive = item.value === activeReviewsTab;
            return (
              <div
                key={item.key}
                className={`review-item ${isActive ? 'active' : ''}`}
                onClick={setActiveReviewsTab.bind({}, item.value)}>
                {item.text} <span className="reviews-count">({item.number})</span>
              </div>
            );
          })
        }
      </div>

    </div>
  )
}

export default ModalSideBarReview
