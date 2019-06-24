import React from 'react';
import PropTypes from 'prop-types';

import {switchRating} from '../../service';

const Rating = ({rating}) => {
  return <span style={{width: `${switchRating(Math.ceil(rating))}`}} />;
};

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;
