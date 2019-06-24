import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Gallery from '../gallery/gallery.jsx';
import Map from '../map/map.jsx';
import Reviews from '../reviews/reviews.jsx';
import AddReviews from '../add-reviews/add-reviews.jsx';
import HotelDescription from '../hotel-description/hotel-description.jsx';
import {connect} from 'react-redux';
import {getCurrentOffer, getReviewsList, getNearOffers} from '../../reducer/data/selectors';
import {getAutorizationStatus} from '../../reducer/user/selectors';
import {Operation} from '../../reducer/data/data';
import PlaceList from '../../components/place-list/place-list.jsx';
import withAddComments from '../../hocs/with-add-comment/with-add-comment';
import witchActiveItem from '../../hocs/witch-active-item/witch-active-item';

const AddReviewsWrapped = withAddComments(AddReviews);
const PlaceListWrapped = witchActiveItem(PlaceList);

class Property extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offerId, getReviews} = this.props;
    getReviews(offerId);
  }

  render() {
    const {offer, reviews, nearOffers, isAuthorization, offerId} = this.props;
    if (!offer) {
      return null;
    }
    return (<React.Fragment>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <Gallery images={offer.images}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <HotelDescription offer={offer}/>
              <section className="property__reviews reviews">
                <Reviews reviews={reviews}/>
                {isAuthorization ? <AddReviewsWrapped hottelId={offerId}/> : null}
              </section>
            </div>
          </div>
          <section className="property__map map" >
            <Map
              offers={nearOffers}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceListWrapped offers={nearOffers}/>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state, {offerId}) => {
  return {
    offer: getCurrentOffer(offerId)(state),
    reviews: getReviewsList(state),
    nearOffers: getNearOffers(state),
    isAuthorization: getAutorizationStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: (hotel) => dispatch(Operation.loadReviews(hotel)),
  };
};

Property.propTypes = {
  offer: PropTypes.object,
  nearOffers: PropTypes.array,
  getReviews: PropTypes.func,
  reviews: PropTypes.array,
  offerId: PropTypes.string,
  isAuthorization: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
