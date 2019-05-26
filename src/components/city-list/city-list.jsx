import React from 'react';
import PropTypes from 'prop-types';

const CityList = ({citys, onChangeCity}) => {
  return <ul className="locations__list tabs__list">
    {Array.from(citys).map((city) => <li key={city} className="locations__item">
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
  citys: PropTypes.object,
  onChangeCity: PropTypes.func
};

export default CityList;
