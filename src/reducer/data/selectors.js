import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

import {getCurrentCity} from '../user/selectors';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCurrentId = (state) => {
  return state[NAME_SPACE].currentOfferId;
};

export const getCurrentOffer = createSelector(
    getOffers,
    getCurrentId,
    (offers, id) => {
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

export const getCitiesList = createSelector(
    getOffers,
    (offers) => {
      return new Set([...offers.map((offer) => offer.city.name)]);
    }
);
