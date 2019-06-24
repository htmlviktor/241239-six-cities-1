import React from 'react';
import ButtonFeature from '../button-feature/button-feature.jsx';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const FavoriteCard = ({offer}) => {
  return <React.Fragment>
    <article className="favorites__card place-card">
      {offer.isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={150} height={110} alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <ButtonFeature
            svgSize={18}
            className={`place-card__bookmark-button`}
            id={offer.id}
            isFavorite={offer.isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `100%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  </React.Fragment>;
};

FavoriteCard.propTypes = {
  offer: PropTypes.object
};

export default FavoriteCard;
