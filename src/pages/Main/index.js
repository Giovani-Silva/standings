import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as CompetitionsActions } from '../../store/ducks/competitions';

import InputSearch from '../../components/InputSearch';
import ListCompetitions from '../../components/ListCompetitions';

import { Container } from './styles';

class Main extends Component {
  static propTypes = {
    competitionsRequest: PropTypes.func.isRequired,
    competitions: PropTypes.shape({
      data: PropTypes.array,
    }).isRequired,
  };

  componentDidMount() {
    const { competitionsRequest } = this.props;
    competitionsRequest();
  }

  render() {
    const {
      competitions: { data },
    } = this.props;
    return (
      <Container>
        <InputSearch />
        {!!data.length && <ListCompetitions />}
      </Container>
    );
  }
}

const mapStateToProps = ({ competitions }) => ({
  competitions,
});

const mapDispatchToProps = dispatch => bindActionCreators(CompetitionsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
