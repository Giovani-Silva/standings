import React from 'react';
import Spinner from '../Spinner';

import { Form } from './styles';

const InputSearch = () => (
  <Form>
    <input type="text" placeholder="Campeonato Brasileiro..." />
    <button type="button">{<Spinner /> || 'Buscar'}</button>
  </Form>
);

export default InputSearch;
