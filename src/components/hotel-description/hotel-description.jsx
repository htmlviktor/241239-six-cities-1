import React from 'react';
import PropTypes from 'prop-types';

import ButtonFeature from '../../components/button-feature/button-feature.jsx';
import Rating from '../rating/rating.jsx';

const HotelDescription = ({offer}) => {
  return (
    <React.Fragment>
      {offer.isPremium ? <div className="property__mark">
        <span>Premium</span>
      </div> : ``}
      <div className="property__name-wrapper">
        <h1 className="property__name">{offer.title}</h1>
        <ButtonFeature
          svgSize={28}
          className={`property__bookmark-button`}
          id={offer.id}
          isFavorite={offer.isFavorite}/>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <Rating rating={offer.rating}/>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {offer.type}
        </li>
        <li className="property__feature property__feature--bedrooms">{offer.bedrooms}
        </li>
        <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">€{offer.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">Whats inside</h2>
        <ul className="property__inside-list">
          {offer.goods.map((it, index) => <li key={index} className="property__inside-item">
            {it}
          </li>)}


        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
            <img className="property__avatar user__avatar" src={offer.host.avatarURL} width={74} height={74} alt="Host avatar" />
          </div>
          <span className="property__user-name">{offer.host.name}</span>
          <span className="property__user-status">{offer.host.isPro ? `Pro` : ``}</span>
        </div>
        <div className="property__description">
          <p className="property__text">{offer.description}</p>

        </div>
      </div>
    </React.Fragment>
  );
};

HotelDescription.propTypes = {
  offer: PropTypes.object
};

export default HotelDescription;
