import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CompetitionsActions } from '../../store/ducks/competitions';

import Spinner from '../Spinner';

import { Form } from './styles';

const InputSearch = ({ competitionsFiltered }) => (
  <Form>
    <input
      type="text"
      placeholder="Campeonato Brasileiro..."
      onKeyUp={e => setTimeout(competitionsFiltered(e.target.value), 500)}
    />
    {/* <button type="button">{<Spinner /> || 'Buscar'}</button> */}
  </Form>
);

const mapDispatchToProps = dispatch => bindActionCreators(CompetitionsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(InputSearch);
