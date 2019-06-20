import React from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map.jsx';

import SortingOption from '../sorting-option/sorting-option.jsx';
import PlaceList from '../place-list/place-list.jsx';

import witchSortingOption from '../../hocs/witch-sorting-option/witch-sorting-option';
import witchActiveItem from '../../hocs/witch-active-item/witch-active-item';


const PlaceListWrapped = witchActiveItem(PlaceList);
const SortingOptionWrapped = witchSortingOption(SortingOption);

const PlacesWrapped = ({offers, currentCity}) => {
  return <React.Fragment>
    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">

          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${offers.length} places to stay in ${currentCity}`}</b>

          <SortingOptionWrapped />

          <PlaceListWrapped
            offers={offers} />

        </section>
        <div className="cities__right-section">
          <section className="cities__map map" >
            <Map offers={offers}/>
          </section>

        </div>
      </div>
    </div>
  </React.Fragment>;
};

PlacesWrapped.propTypes = {
  offers: PropTypes.array,
  currentCity: PropTypes.string
};

export default PlacesWrapped;
