import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as StandingsActions } from '../../store/ducks/standings';

import TableScores from '../../components/TableScores';
import Spinner from '../../components/Spinner';
import { Container, Content } from './styles';

class Standings extends Component {
  static propTypes = {
    standingsRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    standings: PropTypes.shape({
      msg: PropTypes.string,
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      standingsRequest,
    } = this.props;
    standingsRequest(id);
  }

  render() {
    const {
      standings: { msg, loading },
    } = this.props;
    return (
      <Container>
        <Content>
          <h2>Standings</h2>
          <Link to="/">Voltar</Link>
        </Content>
        {loading && !msg && <Spinner />}
        {!loading && msg && <p>{msg}</p>}
        {!loading && !msg && <TableScores />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  standings: state.standings,
});

const mapDispatchToProps = dispatch => bindActionCreators(StandingsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Standings);
