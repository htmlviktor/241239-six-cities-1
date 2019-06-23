import React from 'react';
import Header from '../header/header.jsx';
import {Link} from 'react-router-dom';

const FavoritesEmpty = () => {
  return <React.Fragment>
    <Header />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
          </div>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <Link className="footer__logo-link" to="/">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
      </Link>
    </footer>
  </React.Fragment>;
};

export default FavoritesEmpty;
