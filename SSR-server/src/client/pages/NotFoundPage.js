import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Oops, route not foud.</h1>;
};

export default {
  component: NotFoundPage
};
