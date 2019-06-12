import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/data/data';
import {getOffers} from '../../reducer/data/selectors';

class SortingOption extends Component {

  constructor(props) {
    super(props);
  }

  _sortByHight(offers) {
    const {sortByHight} = this.props;
    const sortOffers = offers.sort((a, b) => {
      return a.price - b.price;
    });
    sortByHight(sortOffers);
  }

  render() {
    console.log(this.props);
    return <React.Fragment>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
                Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li
            onClick={() => {this._sortByHight(this.props.offers)}}
            className="places__option"
            tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(SortingOption);
