//@flow

import React, { useState } from 'react'

import { reviewOptions } from './constants'

import './styles.scss'

type Props = {
}

const ModalSideBarReview = (props: Props) => {
  const [activeReviewsTab, setActiveReviewsTab] = useState(null);

  return (
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
  )
}

export default ModalSideBarReview
