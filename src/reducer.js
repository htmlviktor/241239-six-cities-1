import {loadOffers} from './actions';

const initialState = {
  currentCity: `Amsterdam`,
  listCities: new Set([...data.map((offer) => offer.city)]),
  offers: []
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(loadOffers(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CITY_CHANGE`:
      return Object.assign({}, state, {
        currentCity: action.city
      });
    case `LOAD_OFFERS`:
      return Object.assign({}, state, {
        offers: action.offers
      });
    default: return state;
  }
};


export {
  reducer,
  Operation
};
