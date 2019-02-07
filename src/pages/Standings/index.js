import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as StandingsActions } from '../../store/ducks/standings';

import TableScores from '../../components/TableScores';
import { Container, Content } from './styles';

class Standings extends Component {
  componentDidMount() {
    this.props.standingsRequest(this.props.match.params.id);
  }

  render() {
    return (
      <Container>
        <Content>
          <h2>Standings</h2>
          <Link to="/">Voltar</Link>
        </Content>
        <TableScores />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(StandingsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Standings);
