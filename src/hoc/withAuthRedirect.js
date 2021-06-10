import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: Boolean(state.auth.id),
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth && this.props.match.path !== '/login') return <Redirect to="/login" />;
      if (this.props.isAuth && this.props.match.path === '/login') return <Redirect to="/profile" />;
      return <Component {...this.props} />;
    }
  }
  RedirectComponent = connect(mapStateToPropsForRedirect)(withRouter(RedirectComponent));
  return RedirectComponent;
};
