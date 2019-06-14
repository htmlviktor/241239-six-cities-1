import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({reviews}) => {
  const reviewsList = reviews.map((review, index) => {
    return <li className="reviews__item" key={index}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `94%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
      </div>
    </li>;
  });
  return <React.Fragment>
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviewsList}
    </ul>
  </React.Fragment>;
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
