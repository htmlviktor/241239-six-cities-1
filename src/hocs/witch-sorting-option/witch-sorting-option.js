import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getOffers} from '../../reducer/data/selectors';
import {ActionCreator} from '../../reducer/data/data';

const witchSortingOption = (Component) => {
  class WitchSortingOption extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isOpenMenu: false,
        activeItem: 1
      };

      this._changeStatus = this._changeStatus.bind(this);
      this._onSorting = this._onSorting.bind(this);
    }

    _onSorting(option) {
      const {allOffers, sorting} = this.props;
      switch (option) {
        case `highCost`:
          this.setState({activeItem: 3});
          sorting([...allOffers].sort((a, b) => {
            return b.price - a.price;
          }));
          break;
        case `lowCost`:
          this.setState({activeItem: 2});
          sorting([...allOffers].sort((a, b) => {
            return a.price - b.price;
          }));
          break;
        case `rainting`:
          this.setState({activeItem: 4});
          sorting([...allOffers].sort((a, b) => {
            return b.rating - a.rating;
          }));
          break;
        case `popular`:
          this.setState({activeItem: 1});
          sorting([...allOffers].sort((a, b) => {
            return a.rating - b.rating;
          }));
          break;
      }
    }

    _changeStatus() {
      this.setState({
        isOpenMenu: !this.state.isOpenMenu
      });
    }


    render() {
      return <Component
        onSort={this._onSorting}
        activeItem={this.state.activeItem}
        statusMenu={this.state.isOpenMenu}
        changeMenu={this._changeStatus}
        {...this.props}/>;
    }

  }
  const mapStateToProps = (state) => ({
    allOffers: getOffers(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    sorting: (offers) => dispatch(ActionCreator.loadOffers(offers)),
  });

  WitchSortingOption.propTypes = {
    allOffers: PropTypes.array,
    sorting: PropTypes.func
  };

  return connect(mapStateToProps, mapDispatchToProps)(WitchSortingOption);
};

export default witchSortingOption;
