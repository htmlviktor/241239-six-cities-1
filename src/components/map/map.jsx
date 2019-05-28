import React, {Component} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();

    this.map = null;
  }

  render() {
    return (
      <div
        style={{height: `100%`}}
        ref={this.container}
        id="map">
      </div>
    );
  }

  componentDidMount() {
    const {cards} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/map-pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    this.map = leaflet.map(this.container.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    cards.forEach((card) => {
      leaflet
        .marker(card.coordinates, {icon})
        .addTo(this.map);
    });
  }
}

Map.propTypes = {
  cards: PropTypes.array,
  currentCity: PropTypes.string
};

