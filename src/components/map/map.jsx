import React, {Component} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this._zoom = 12;
    this._marker = {
      iconUrl: `img/map-pin.svg`,
      iconSize: [30, 30]
    };
    this._group = null;
  }

  // _addMarkers() {
  //   this._group = leaflet.layerGroup().addTo(this._map);
  //   for (let item of this.props.coordinates) {
  //     leaflet.marker(item, this._marker).addTo(this._group);
  //   }
  // }
  // _initMap() {
  //   const city = null;
  //   this._map = leaflet.map(`map`, {
  //     center: city,
  //     zoom: this._zoom,
  //     zoomControl: false,
  //     marker: true
  //   });
  //   this._map.setView(city, this._zoom);
  //   leaflet
  //       .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
  //         attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  //       })
  //       .addTo(this._map);
  //   this._addMarkers();
  // }

  // componentDidMount() {
  //   this._initMap();
  // }

  // componentDidUpdate() {
  //   this._group.clearLayers();
  //   this._map.setView(cityCoordinates, this._zoom);
  //   for (let item of cards) {
  //     leaflet.marker(item, this._marker).addTo(this._group);
  //   }
  // }

  render() {
    return (
      <div className="cities__map" id="map" />
    );
  }
}


Map.propTypes = {
  cards: PropTypes.array,
  currentCity: PropTypes.string
};

