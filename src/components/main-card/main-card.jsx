import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

export default class MainCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };

    this._activeCard = this._activeCard.bind(this);
    this._deActive = this._deActive.bind(this);
  }
  _activeCard(id) {
    this.setState({
      activeCard: id,
    });
  }
  _deActive() {
    this.setState({
      activeCard: null
    });
  }
  render() {
    const {dataCard} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {dataCard.map((data, index) => {
          return <PlaceCard
            onHover={this._activeCard}
            onDeHover={this._deActive}
            data={data}
            key={index}
            index={index}
          />;
        })}
      </div>
    );
  }
}


MainCard.propTypes = {
  dataCard: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.string
  }))
};


