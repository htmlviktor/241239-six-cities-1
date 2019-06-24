import React from 'react';
import PropTypes from 'prop-types';
import {Operation} from '../../reducer/data/data';
import {connect} from 'react-redux';

class ButtonFeature extends React.PureComponent {
  constructor(props) {
    super(props);

    this.addFeatures = this.addFeatures.bind(this);
  }

  addFeatures(id, status) {
    this.props.addFeatures(id, status);
  }


  render() {
    const {id, isFavorite, className, svgSize} = this.props;
    return <button
      onClick={() => {
        if (isFavorite) {
          this.addFeatures(id, 0);
        } else {
          this.addFeatures(id, 1);
        }
      }}
      className={`${className} button`}
      type="button">
      <svg className="place-card__bookmark-icon" width={svgSize} height={svgSize}>
        <use xlinkHref={isFavorite ? `#icon-bookmark--active` : `#icon-bookmark`} />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addFeatures: (id, status) => dispatch(Operation.addFavoriteHotel(id, status))
  };
};

ButtonFeature.propTypes = {
  addFeatures: PropTypes.func,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  className: PropTypes.string,
  svgSize: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFeature);
