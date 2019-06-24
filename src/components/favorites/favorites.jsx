import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getUserData} from '../../reducer/user/selectors';
import {getFavoritesOffers, getFavoritesCities} from '../../reducer/data/selectors';
import {Link} from 'react-router-dom';
import {Operation} from '../../reducer/data/data';
import Header from '../../components/header/header.jsx';
import FavoriteList from '../favorites-list/favorites-list.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';

class Favorites extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadOffers();
  }

  componentDidUpdate() {
    this.props.loadOffers();
  }

  render() {
    const {offers, cities} = this.props;
    if (offers.length === 0) {
      return <FavoritesEmpty />;
    }
    return <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList offers={offers} cities={cities}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </React.Fragment>;
  }
}

Favorites.propTypes = {
  isLoggedIn: PropTypes.bool,
  userData: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    userData: getUserData(state),
    offers: getFavoritesOffers(state),
    cities: getFavoritesCities(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch(Operation.loadFavoritesOffers())
});

Favorites.propTypes = {
  loadOffers: PropTypes.func,
  offers: PropTypes.array,
  cities: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
