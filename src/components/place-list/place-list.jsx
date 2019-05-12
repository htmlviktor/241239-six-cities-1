import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

export default class PlaceList extends Component {
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
  onClick(id) {
    console.log(id)
  }
  render() {
    const {dataCard} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {dataCard.map((data, index) => {
          return <PlaceCard
            onClick={this.onClick}
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


PlaceList.propTypes = {
  dataCard: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.string
  }))
};


