import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SortingOption extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {statusMenu, changeMenu, onSort, activeItem} = this.props;
    return <React.Fragment>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          onClick={changeMenu}
          className="places__sorting-type"
          tabIndex={0}>
                Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${statusMenu ? `places__options--opened` : ``}`}>
          <li
            onClick={() => {
              onSort(`popular`);
            }}
            key={1}
            className={`places__option ${activeItem === 1 ? `places__option--active` : ``}`}
            tabIndex={0}>Popular</li>
          <li
            onClick={() => {
              onSort(`lowCost`);
            }}
            key={2}
            className={`places__option ${activeItem === 2 ? `places__option--active` : ``}`}
            tabIndex={0}>Price: low to high</li>
          <li
            onClick={() => {
              onSort(`highCost`);
            }}
            key={3}
            className={`places__option ${activeItem === 3 ? `places__option--active` : ``}`}
            tabIndex={0}>Price: high to low</li>
          <li
            onClick={() => {
              onSort(`rainting`);
            }}
            key={4}
            className={`places__option ${activeItem === 4 ? `places__option--active` : ``}`}
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

SortingOption.propTypes = {
  changeMenu: PropTypes.func,
  statusMenu: PropTypes.bool,
  onSort: PropTypes.func,
  activeItem: PropTypes.number
};

export default SortingOption;
