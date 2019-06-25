import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating/rating.jsx';

const Reviews = ({reviews}) => {

  const reviewsList = reviews.map((review, index) => {
    const options = {
      month: `long`,
      year: `numeric`,
    };
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
            <Rating rating={review.rating}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>{new Date(review.date).toLocaleDateString(`en-US`, options)}</time>
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
  rating: PropTypes.number
};

export default Reviews;
