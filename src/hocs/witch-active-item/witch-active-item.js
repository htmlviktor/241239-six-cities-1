import React, {PureComponent} from 'react';
import {ActionCreator} from '../../reducer/data/data';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const witchActiveItem = (Component) => {
  class WitchActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this._handleActiveItem = this._handleActiveItem.bind(this);
    }

    render() {
      return <Component
        onActiveItemChange={this._handleActiveItem}
        {...this.props}/>;
    }

    _handleActiveItem(activeItem) {
      this.props.activeOffer(activeItem);
    }
  }

  const mapStateToProps = () => ({});

  const mapDispatchToProps = (dispatch) => {
    return {
      activeOffer: (id) => dispatch(ActionCreator.activeOfferId(id)),
    };
  };

  WitchActiveItem.propTypes = {
    activeOffer: PropTypes.func
  };

  return connect(mapStateToProps, mapDispatchToProps)(WitchActiveItem);
};

export default witchActiveItem;
