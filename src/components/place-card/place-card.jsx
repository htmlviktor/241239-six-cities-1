import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ButtonFeature from '../../components/button-feature/button-feature.jsx';

export default class PlaceCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      type,
      previewImage,
      isPremium,
      isFavorite,
      price} = this.props.data;
    const {onHover, onClickActiveCard, activeIndex} = this.props;
    return (
      <article
        onMouseEnter={onHover}
        className="cities__place-card place-card">
        {isPremium ? <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}

        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#" >
            <img
              onClick={(evt) => {
                evt.preventDefault();
                onClickActiveCard(activeIndex);
              }}
              className="place-card__image"
              src={previewImage}
              width={260}
              height={200}
              alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <ButtonFeature
              svgSize={18}
              className={`place-card__bookmark-button`}
              id={id}
              isFavorite={isFavorite}/>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `93%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${id}`} >{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onClickActiveCard: PropTypes.func,
  activeIndex: PropTypes.number,
  onHover: PropTypes.func,
  data: PropTypes.shape({
    previewImage: PropTypes.string,
    id: PropTypes.number,
    degree: PropTypes.string,
    order: PropTypes.string,
    photo: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool
  }).isRequired,
};


