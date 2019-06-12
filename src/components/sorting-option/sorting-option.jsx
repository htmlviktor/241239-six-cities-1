import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/data/data';
import {getOffers} from '../../reducer/data/selectors';

class SortingOption extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpenMenu: false
    };

  }

  _sortByHight(offers) {
    const {sortByHight} = this.props;
    const sortOffers = [...offers].sort((a, b) => {
      return b.price - a.price;
    });
    sortByHight(sortOffers);
  }

  _sortByLow(offers) {
    const {sortByHight} = this.props;
    const sortOffers = [...offers].sort((a, b) => {
      return a.price - b.price;
    });
    sortByHight(sortOffers);
  }

  _sortByRated(offers) {
    const {sortByHight} = this.props;
    const sortOffers = [...offers].sort((a, b) => {
      return b.rating - a.rating;
    });
    sortByHight(sortOffers);
  }

  render() {
    const {isOpenMenu} = this.state;
    return <React.Fragment>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          onClick={() => {
            this.setState({isOpenMenu: !this.state.isOpenMenu});
          }}
          className="places__sorting-type"
          tabIndex={0}>
                Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpenMenu ? `places__options--opened` : ``}`}>
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li
            onClick={() => {
              this._sortByLow(this.props.offers);
            }}
            className="places__option"
            tabIndex={0}>Price: low to high</li>
          <li
            onClick={() => {
              this._sortByHight(this.props.offers);
            }}
            className="places__option"
            tabIndex={0}>Price: high to low</li>
          <li
            onClick={() => {
              this._sortByRated(this.props.offers);
            }}
            className="places__option"
            tabIndex={0}>Top rated first</li>
        </ul>
        {/*
          <select class="places__sorting-type" id="places-sorting">
            <option class="places__option" value="popular" selected="">Popular</option>
            <option class="places__option" value="to-high">Price: low to high</option>
            <option class="places__option" value="to-low">Price: high to low</option>
            <option class="places__option" value="top-rated">Top rated first</option>
          </select>
          */}
      </form>
    </React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  sortByHight: (offers) => dispatch(ActionCreator.loadOffers(offers)),
});

SortingOption.propTypes = {
  sortByHight: PropTypes.func,
  offers: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingOption);
