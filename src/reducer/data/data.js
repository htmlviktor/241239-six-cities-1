import {adapter} from './adapter';

const initialState = {
  listCities: new Set(),
  offers: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_CITIES_LIST: `LOAD_CITIES_LIST`
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      offers
    };
  },
  loadCitiesList: (list) => {
    return {
      type: ActionType.LOAD_CITIES_LIST,
      list
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(adapter(response.data)));
        dispatch(ActionCreator.loadCitiesList(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
  ActionCreator,
  Operation
};
