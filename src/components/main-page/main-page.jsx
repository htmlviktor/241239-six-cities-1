import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlaceList from '../place-list/place-list.jsx';
import Map from '../map/map.jsx';
import CityList from '../city-list/city-list.jsx';

import witchActiveItem from '../../hocs/witch-active-item/witch-active-item';

import {ActionCreator} from '../../reducer/user/user';

import {getUserData, getAutorizationStatus} from '../../reducer/user/selectors';
import {getCurrentOffers, getCitiesList} from '../../reducer/data/selectors.js';

import {getCurrentCity} from '../../reducer/user/selectors.js';
import Header from '../header/header.jsx';

const PlaceListWrapped = witchActiveItem(PlaceList);
const CityListWrapped = witchActiveItem(CityList);

const MainPage = ({offers, cities, onChangeCity, currentCity}) => {
  return <div>
    <Header />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <section className="locations container">
          <CityListWrapped
            onChangeCity={onChangeCity}
            currentCity={currentCity}
            cities={cities}/>
        </section></div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">

            <PlaceListWrapped
              city={currentCity}
              offers={offers} />

          </section>
          <div className="cities__right-section">
            <section className="cities__map map" >
              <Map cards={offers} />
            </section>

          </div>
        </div>
      </div>
    </main>
  </div>;
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  cities: PropTypes.object,
  onChangeCity: PropTypes.func,
  currentCity: PropTypes.string,
  userData: PropTypes.object,
  auth: PropTypes.bool
};


const mapStateToProps = (state) => {
  return {
    offers: getCurrentOffers(state),
    cities: getCitiesList(state),
    currentCity: getCurrentCity(state),
    userData: getUserData(state),
    auth: getAutorizationStatus(state)
  };
};


const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => dispatch(ActionCreator.changeCity(city)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
