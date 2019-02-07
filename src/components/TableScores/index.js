import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as StandingsActions } from '../../store/ducks/standings';

import { Container, Scores } from './styles';

class TableScores extends Component {
  componentDidMount() {
    // console.tron.log(this.props);
  }

  render() {
    return (
      <Container>
        <Scores>
          <thead>
            <tr>
              <th scope="col">*</th>
              <th scope="col">TIME</th>
              <th scope="col">PTS</th>
              <th scope="col">V</th>
              <th scope="col">E</th>
              <th scope="col">D</th>
              <th scope="col">GP</th>
              <th scope="col">GC</th>
              <th scope="col">SD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>São Paulo</td>
              <td>15</td>
              <td>4</td>
              <td>2</td>
              <td>0</td>
              <td>12</td>
              <td>4</td>
              <td>8</td>
            </tr>
          </tbody>
        </Scores>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => bindActionCreators({ StandingsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableScores);
