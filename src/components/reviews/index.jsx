//@flow

import React, { useState } from 'react'
import { ICON_STAR_EMPTY, AVATAR } from 'common/images'
import StarRatings from 'react-star-ratings'
import { review, review_info, review_text, review_name, review_time, review_rating, edit_review, left_review } from './styles.module.scss'

type Props = {
  className: string
}

const Reviews = (props: Props) => {
  return (
    <div className={review}>
      <div className="horizontal-rule">
      </div>
      <div className={review_info}>
        <img src={AVATAR} className="img-avatar" />
        <div className={review_text}>
          <span className={review_name}>Eugene Diaz</span>
          <span className={review_time}>7 hours ago</span>
          <div className={review_rating}>
            <StarRatings
              rating={5}
              starRatedColor="rgb(3, 169, 244)"
              numberOfStars={5}
              name='rating'
              svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
              svgIconViewBox='0 0 30 30'
              starHoverColor="rgb(3, 169, 244)"
              starDimension="30"
              starSpacing="0px"
            />
          </div>
          <p className={left_review}>
            As an iPhone 3GS user, since it will always use apple fruit powder, if it is not Samsung's bombing
            survivors s8 listed, I am afraid to switch to Andrews camp, the idea of millet mix2 listed a step
            further. Even after the Apple conference is over -iPhone X did not bring me any surprises, cancellation
            of the fingerprint is even canceled I once canceled the idea of buying. After getting the real machine,
            there is only one idea in my mind, that is the value.
            </p>
        </div>
      </div>
      <div className="horizontal-rule">
      </div>
      <div className={review_info}>
        <img src={AVATAR} className="img-avatar" />
        <div className={review_text}>
          <span className={review_name}>Eugene Diaz</span>
          <span className={review_time}>7 hours ago</span>
          <div className={review_rating}>
            <StarRatings
              rating={4}
              starRatedColor="rgb(3, 169, 244)"
              numberOfStars={5}
              name='rating'
              svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
              svgIconViewBox='0 0 30 30'
              starHoverColor="rgb(3, 169, 244)"
              starDimension="30"
              starSpacing="0px"
            />
          </div>
          <p className={left_review}>
            As an iPhone 3GS user, since it will always use apple fruit powder, if it is not Samsung's bombing
            survivors s8 listed, I am afraid to switch to Andrews camp, the idea of millet mix2 listed a step
            further. Even after the Apple conference is over -iPhone X did not bring me any surprises, cancellation
            of the fingerprint is even canceled I once canceled the idea of buying. After getting the real machine,
            there is only one idea in my mind, that is the value.
            </p>
        </div>
      </div>
      <div className="horizontal-rule">
      </div>
      <div className={review_info}>
        <img src={AVATAR} className="img-avatar" />
        <div className={review_text}>
          <span className={review_name}>Eugene Diaz</span>
          <span className={review_time}>7 hours ago</span>
          <div className={review_rating}>
            <StarRatings
              rating={3}
              starRatedColor="rgb(3, 169, 244)"
              numberOfStars={5}
              name='rating'
              svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
              svgIconViewBox='0 0 30 30'
              starHoverColor="rgb(3, 169, 244)"
              starDimension="30"
              starSpacing="0px"
            />
          </div>
          <p className={left_review}>
            As an iPhone 3GS user, since it will always use apple fruit powder, if it is not Samsung's bombing
            survivors s8 listed, I am afraid to switch to Andrews camp, the idea of millet mix2 listed a step
            further. Even after the Apple conference is over -iPhone X did not bring me any surprises, cancellation
            of the fingerprint is even canceled I once canceled the idea of buying. After getting the real machine,
            there is only one idea in my mind, that is the value.
            </p>
        </div>
      </div>
      <div className="horizontal-rule">
      </div>
    </div>
  )
}

export default Reviews
