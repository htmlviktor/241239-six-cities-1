import {adapter, adapterObj} from './adapter';

const initialState = {
  offers: [],
  activeOfferId: null,
  currentOfferId: null,
  reviews: [],
  favorite: []
};

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CURRENT_OFFER: `CURRENT_OFFER`,
  ACTIVE_OFFER: `ACTIVE_OFFER`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  RELOAD_OFFER: `RELOAD_OFFER`,
  LOAD_FAV_OFFERS: `LOAD_FAV_OFFERS`
};

const ActionCreator = {
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      reviews
    };
  },
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
  },
  reloadOffers: (offer) => {
    return {
      type: ActionType.RELOAD_OFFER,
      offer
    };
  },
  loadFavotiresOffers: (offers) => {
    return {
      type: ActionType.LOAD_FAV_OFFERS,
      offers
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(adapter(response.data)));
      });
  },
  loadReviews: (hotel) => (dispatch, _getState, api) => {
    return api.get(`/comments/${hotel}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  uploadComment: (rating, comment, hottelId) => (dispatch, _getState, api) => {
    return api.post(`/comments/${hottelId}`, {rating, comment})
      .then(({status, data}) => {
        if (status === 200) {
          dispatch(ActionCreator.loadReviews(data));
        }
      });
  },
  addFavoriteHotel: (hottelId, statusRequire) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${hottelId}/${statusRequire}`)
      .then(({status, data}) => {
        if (status === 200) {
          dispatch(ActionCreator.reloadOffers(adapterObj(data)));
        }
      }).catch(() => {
        return;
      });
  },
  loadFavoritesOffers: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        dispatch(ActionCreator.loadFavotiresOffers(adapter(data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_REVIEWS`:
      return Object.assign({}, state, {
        reviews: action.reviews
      });
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
    case `RELOAD_OFFER`:
      return Object.assign({}, state, {
        offers: state.offers.map((content) => {
          if (content.id === action.offer.id) {
            return action.offer;
          } else {
            return content;
          }
        })
      });
    case `LOAD_FAV_OFFERS`:
      return Object.assign({}, state, {
        favorite: action.offers
      });
    default: return state;
  }
};

export {
  reducer,
  ActionCreator,
  Operation
};
