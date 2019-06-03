import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.USER;

export const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};
