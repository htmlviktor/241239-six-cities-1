import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../item-card/item-card.jsx';

const MainCard = (props) => {
  const {infoCard} = props;
  const cards = infoCard.map((el, index) => {
    return <ItemCard
      title={el.title}
      key={index}
    />;
  });
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
};

MainCard.propTypes = {
  infoCard: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  }))
};

export default MainCard;
