import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions/index';

class Form extends Component {
  componentDidMount() {
    const { getCurrencyList } = this.props;
    getCurrencyList();
  }

  render() {
    return (
      <div>Até aqui completei o desafio 04</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencyList: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  getCurrencyList: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
