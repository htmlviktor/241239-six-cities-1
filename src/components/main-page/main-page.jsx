import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CityList from '../city-list/city-list.jsx';

import witchActiveItem from '../../hocs/witch-active-item/witch-active-item';

import {ActionCreator} from '../../reducer/user/user';

import {getUserData, getAutorizationStatus} from '../../reducer/user/selectors';
import {getCurrentOffers, getCitiesList} from '../../reducer/data/selectors.js';

import {getCurrentCity} from '../../reducer/user/selectors.js';
import Header from '../header/header.jsx';

import PlacesWrapped from '../../components/places-wrapped/places-wrapped.jsx';
import NoResultsPage from '../../components/no-results/no-results-page.jsx';

const CityListWrapped = witchActiveItem(CityList);


const MainPage = ({offers, cities, onChangeCity, currentCity}) => {
  return <div>
    <Header />
    <main className={`page__main page__main--index ${!offers ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <section className="locations container">
          <CityListWrapped
            onChangeCity={onChangeCity}
            currentCity={currentCity}
            cities={cities}/>
        </section>
      </div>
      {!offers ? <NoResultsPage /> : <PlacesWrapped offers={offers} currentCity={currentCity}/> }
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
