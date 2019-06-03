import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.USER;

export const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

export const getAutorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

export const getUserData = (state) => {
  return state[NAME_SPACE].userData;
};
