import React, {PureComponent} from 'react';
import {ActionCreator, Operation} from '../../reducer/data/data';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const witchActiveItem = (Component) => {
  class WitchActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this._handleActiveItem = this._handleActiveItem.bind(this);
      this._addFeatures = this._addFeatures.bind(this);
    }

    render() {
      return <Component
        onActiveItemChange={this._handleActiveItem}
        addFeatures={this._addFeatures}
        {...this.props}/>;
    }

    _handleActiveItem(activeItem) {
      this.props.activeOffer(activeItem);
    }

    _addFeatures(id) {
      this.props.addFeatures(id, status);
    }
  }

  const mapStateToProps = () => ({});

  const mapDispatchToProps = (dispatch) => {
    return {
      activeOffer: (id) => dispatch(ActionCreator.activeOfferId(id)),
      addFeatures: (id, status) => dispatch(Operation.addFavoriteHotel(id, status))
    };
  };

  WitchActiveItem.propTypes = {
    activeOffer: PropTypes.func
  };

  return connect(mapStateToProps, mapDispatchToProps)(WitchActiveItem);
};

export default witchActiveItem;
