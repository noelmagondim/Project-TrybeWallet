import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{ email }</h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = ({
  email: PropTypes.string.isRequired,
});

export default connect(mapStateToProps, null)(Header);
