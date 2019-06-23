import React from 'react';

import {switchRating} from '../../service';

const Rating = ({rating}) => {
  return <span style={{width: `${switchRating(Math.ceil(rating))}`}} />;
};

export default Rating;
