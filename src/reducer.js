import {loadOffers, loadCitiesList} from './actions';

const initialState = {
  currentCity: `Amsterdam`,
  listCities: new Set(),
  offers: []
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(loadOffers(response.data));
        dispatch(loadCitiesList(response.data));
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
    case `LOAD_CITIES_LIST`:
      return Object.assign({}, state, {
        listCities: new Set([...action.list.map((offer) => offer.city.name)])
      });
    default: return state;
  }
};


export {
  reducer,
  Operation
};
