import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

export default class PlaceList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onActiveItemChange, addFeatures} = this.props;
    return (
      <React.Fragment>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((card, index) => {

            return <PlaceCard
              addFeatures={addFeatures}
              onClickActiveCard={(id) => {
                onActiveItemChange(id);
              }}
              data={card}
              key={card.id}
              activeIndex={index}
            />;
          })}
        </div>
      </React.Fragment>
    );
  }
}


PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  city: PropTypes.string,
  onActiveItemChange: PropTypes.func,
  addFeatures: PropTypes.func
};


