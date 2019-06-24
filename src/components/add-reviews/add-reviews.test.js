import React from 'react';
import renderer from 'react-test-renderer';
import AddReviews from './add-reviews.jsx';


it(`Test AddReview Component`, () => {
  const tree = renderer
    .create(
        <AddReviews />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
