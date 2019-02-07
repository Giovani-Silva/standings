import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import {
  Container, List, Item, Link, Tag, Name,
} from './styles';

const renderCompetition = list => list.map(item => (
  <Item key={item.id}>
    <Link to={`standings/${item.id}`}>
      <Tag>
        <span>{item.area.name}</span>
        <span>{`cod: ${item.id}`}</span>
      </Tag>
      <Name>{item.name}</Name>
    </Link>
  </Item>
));

const ListCompetitions = ({ competitions }) => {
  const { filter, loading } = competitions;
  return (
    <Container>
      {!!loading && <Spinner />}
      {!loading && !!filter.length && <List>{renderCompetition(filter)}</List>}
    </Container>
  );
};

ListCompetitions.propTypes = {
  competitions: PropTypes.shape({
    filter: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        area: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    ),
  }).isRequired,
};

const mapStateToProps = ({ competitions }) => ({
  competitions,
});

export default connect(
  mapStateToProps,
  null,
)(ListCompetitions);
