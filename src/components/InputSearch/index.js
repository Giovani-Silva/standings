import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { Creators as CompetitionsActions } from '../../store/ducks/competitions';

import { Form } from './styles';

const handleInput = (e, competitionsFiltered, clearFiltered) => {
  e.preventDefault();
  if (!e.target.value.trim()) {
    clearFiltered();
    return;
  }
  competitionsFiltered(e.target.value);
};

const InputSearch = ({ competitionsFiltered, clearFiltered }) => (
  <Form onSubmit={e => e.preventDefault()}>
    <input
      type="text"
      placeholder="Search Competition"
      onChange={e => handleInput(e, competitionsFiltered, clearFiltered)}
    />
  </Form>
);

InputSearch.propTypes = {
  competitionsFiltered: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CompetitionsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(InputSearch);
