import React from 'react';
import PropTypes from 'prop-types';

const CityList = ({cities, onChangeCity, currentCity}) => {

  return <ul className="locations__list tabs__list">
    {Array.from(cities).map((city) => <li key={city} className={`locations__item-link ${currentCity === city ? `tabs__item--active` : ``}`}>
      <a
        onClick={(evt) => {
          evt.preventDefault();
          onChangeCity(city);
        }}
        className="locations__item-link tabs__item"
        href="#">
        <span>{city}</span>
      </a>
    </li>)}
  </ul>;
};

CityList.propTypes = {
  cities: PropTypes.object,
  onChangeCity: PropTypes.func,
  onActiveItemChange: PropTypes.func,
  currentCity: PropTypes.string
};

export default CityList;
