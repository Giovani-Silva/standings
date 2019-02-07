import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as StandingsActions } from '../../store/ducks/standings';

import { Container, Scores } from './styles';

class TableScores extends Component {
  static propTypes = {
    standings: PropTypes.shape({
      competition: PropTypes.shape({
        name: PropTypes.string,
        area: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
      standings: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          playedGames: PropTypes.number,
          won: PropTypes.number,
          draw: PropTypes.number,
          lost: PropTypes.number,
          points: PropTypes.number,
          goalsFor: PropTypes.number,
          goalsAgainst: PropTypes.number,
          goalDifference: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  renderTable = () => {
    const {
      standings: { standings },
    } = this.props;
    const items = standings.filter(total => total.type === 'TOTAL');

    return items.map(item => (
      <Scores key={new Date().getTime()}>
        <thead>
          {!!item.group && (
            <tr>
              <th colSpan="10">{item.group.split('_').join(' ')}</th>
            </tr>
          )}
          <tr>
            <th scope="col">*</th>
            <th scope="col">TEAM</th>
            <th scope="col">PTS</th>
            <th scope="col">PG</th>
            <th scope="col">W</th>
            <th scope="col">D</th>
            <th scope="col">L</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">GD</th>
          </tr>
        </thead>
        <tbody>
          {item.table.map(time => (
            <tr key={time.team.id}>
              <td>{time.position}</td>
              <td>{time.team.name}</td>
              <td>{time.points}</td>
              <td>{time.playedGames}</td>
              <td>{time.won}</td>
              <td>{time.draw}</td>
              <td>{time.lost}</td>
              <td>{time.goalsFor}</td>
              <td>{time.goalsAgainst}</td>
              <td>{time.goalDifference}</td>
            </tr>
          ))}
        </tbody>
      </Scores>
    ));
  };

  render() {
    const {
      standings: { competition },
    } = this.props;
    return (
      <Container>
        <h3>{`${competition.name} - ${competition.area.name}`}</h3>
        {this.renderTable()}
      </Container>
    );
  }
}

const mapStateToProps = ({ standings }) => ({
  standings: standings.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ StandingsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableScores);
