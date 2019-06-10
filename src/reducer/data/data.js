import {adapter} from './adapter';

const initialState = {
  offers: [],
  activeOfferId: null,
  currentOfferId: 1,
};

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CURRENT_OFFER: `CURRENT_OFFER`,
  ACTIVE_OFFER: `ACTIVE_OFFER`
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      offers
    };
  },
  currentOfferId: (id) => {
    return {
      type: ActionType.CURRENT_OFFER,
      id
    };
  },
  activeOfferId: (id) => {
    return {
      type: ActionType.ACTIVE_OFFER,
      id
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(adapter(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_OFFERS`:
      return Object.assign({}, state, {
        offers: action.offers
      });
    case `CURRENT_OFFER`:
      return Object.assign({}, state, {
        currentOfferId: action.id
      });
    case `ACTIVE_OFFER`:
      return Object.assign({}, state, {
        activeOfferId: action.id,
      });
    default: return state;
  }
};

export {
  reducer,
  ActionCreator,
  Operation
};
