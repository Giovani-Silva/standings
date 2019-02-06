import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { Creators as CompetitionsActions } from '../../store/ducks/competitions';

import { Form } from './styles';

const InputSearch = ({ competitionsFiltered }) => (
  <Form>
    <input
      type="text"
      placeholder="Search Competition"
      onKeyUp={e => competitionsFiltered(e.target.value)}
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
