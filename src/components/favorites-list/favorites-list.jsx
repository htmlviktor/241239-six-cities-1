import React from 'react';
import FavoriteCard from '../favorites-card/favorite-card.jsx';

const FavoriteList = ({offers, cities}) => {
  return <ul className="favorites__list">
    {Array.from(cities).map((city, index) => {
      return <li className="favorites__locations-items" key={index}>
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {offers.filter((offer) => offer.city.name === city)
            .map((offer) => {
              return <FavoriteCard offer={offer} key={offer.id}/>;
            })}
        </div>
      </li>;
    })}
  </ul>;
};

export default FavoriteList;
