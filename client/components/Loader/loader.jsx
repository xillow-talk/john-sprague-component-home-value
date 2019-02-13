import React from 'react';
import { LoadingContainer, EndList } from './styles';

const Loader = props => (
  props.loading
    ? <LoadingContainer />
    : <EndList />
);

export default Loader;
