const initialState = {
  currentCity: `Amsterdam`,
};

const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ActionType.CITY_CHANGE,
      city
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CITY_CHANGE`:
      return Object.assign({}, state, {
        currentCity: action.city
      });
    default: return state;
  }
};


export {
  reducer,
  ActionCreator,
};
