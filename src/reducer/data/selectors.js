import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

import {getCurrentCity} from '../user/selectors';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getReviewsList = (state) => {
  return state[NAME_SPACE].reviews;
};


export const getFavoritesOffers = (state) => {
  return state[NAME_SPACE].favorite;
};

export const getFavoritesCities = createSelector(
    getFavoritesOffers,
    (offers) => {
      return new Set([...offers.map((offer) => offer.city.name)]);
    }
);

export const getActiveCard = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

const stateMock = (state) => state;

export const getCurrentOffer = (id) => createSelector(
    getOffers,
    stateMock,
    (offers) => {
      return offers.find((it) => it.id === Number(id));
    }
);

export const getCurrentOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city);
    }
);

export const getNearOffers = createSelector(
    getCurrentOffers,
    (offers) => {
      return offers.splice(0, 3);
    }
);

export const getCurrentCityLocation = createSelector(
    getCurrentOffers,
    (offers) => {
      return offers[0] ? offers[0].city.location : [52.37454, 4.897976];
    }
);

export const getCitiesList = createSelector(
    getOffers,
    (offers) => {
      return new Set([...offers.map((offer) => offer.city.name).sort()]);
    }
);


