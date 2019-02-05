import React, { Fragment } from 'react';

import { Container, Scores } from './styles';

const TableScores = () => (
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

export default TableScores;
