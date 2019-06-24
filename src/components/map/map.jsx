import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import leaflet from 'leaflet';

import {getCurrentCity} from '../../reducer/user/selectors';
import {getCurrentCityLocation, getActiveCard} from '../../reducer/data/selectors';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._zoom = 12;
    this._group = null;
  }

  _addMarkers() {
    this._group = leaflet.layerGroup().addTo(this._map);
    for (let item of this.props.offers) {
      leaflet.marker(item.location).addTo(this._group);
    }
  }
  _initMap() {
    const city = this.props.cityLocation;
    this._map = leaflet.map(`map`, {
      center: city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, this._zoom);
    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);
    this._addMarkers();
  }

  componentDidMount() {

    this._initMap();
  }

  componentDidUpdate(prevProps) {

    const customIcon = leaflet.icon({
      iconUrl: `img/marker-icon-active.png`,
      iconSize: [25, 41],
    });
    this._group.clearLayers();
    this._map.setView(this.props.cityLocation, this._zoom);
    this.props.offers.forEach((item) => {
      leaflet.marker(item.location).addTo(this._group);
    });

    if (prevProps.activeCard !== this.props.activeCard) {

      const {activeCard, offers} = this.props;
      this._group.clearLayers();
      offers.forEach((item, index) => {
        if (activeCard === index) {
          leaflet.marker(offers[activeCard].location, {icon: customIcon}).addTo(this._group);
        } else {
          leaflet.marker(item.location).addTo(this._group);
        }
      });
    }
  }

  render() {
    return (
      <div className="cities__map" id="map" style={{height: `100%`}} />
    );
  }
}


Map.propTypes = {
  offers: PropTypes.array,
  currentCity: PropTypes.string,
  cityLocation: PropTypes.array,
  activeCard: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    activeCity: getCurrentCity(state),
    cityLocation: getCurrentCityLocation(state),
    activeCard: getActiveCard(state),
  };
};

export default connect(mapStateToProps)(Map);
