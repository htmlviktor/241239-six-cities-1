import React from 'react';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/data/data';
import PropTypes from 'prop-types';

const withAddComment = (Component) => {
  class WithAddComment extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        comment: ``,
        activeSubmit: false
      };

      this._onChangeRating = this._onChangeRating.bind(this);
      this._onChangeText = this._onChangeText.bind(this);
      this._onSubmit = this._onSubmit.bind(this);
    }

    _onChangeRating(value) {
      this.setState({rating: value});
      this._activeButton();
    }

    _onChangeText(value) {
      this.setState({comment: value});
      this._activeButton();
    }

    _activeButton() {
      if ((this.state.comment.length >= 50 && this.state.comment.length <= 300) && this.state.rating) {
        this.setState({activeSubmit: true});
      } else {
        this.setState({activeSubmit: false});
      }
    }

    _onSubmit() {
      const {upload, hottelId} = this.props;
      const {rating, comment} = this.state;
      upload(rating, comment, hottelId);
      this.resetState();
    }

    resetState() {
      this.setState({
        rating: null,
        comment: ``,
        activeSubmit: false
      });
    }

    render() {
      return <Component
        onSubmit={this._onSubmit}
        activeSubmit={this.state.activeSubmit}
        onChangeText={this._onChangeText}
        onChangeRating={this._onChangeRating}
        {...this.props}/>;
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    upload: (rating, comment, hottelId) => dispatch(Operation.uploadComment(rating, comment, hottelId))
  });

  WithAddComment.propTypes = {
    upload: PropTypes.func,
    hottelId: PropTypes.string
  };

  return connect(null, mapDispatchToProps)(WithAddComment);
};

export default withAddComment;
