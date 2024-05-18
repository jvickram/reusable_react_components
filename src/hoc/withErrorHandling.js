import React from 'react';

function withErrorHandling(Component) {
  console.log("Error handler invoked!!!!")
  return function WithErrorHandling({ error, ...props }) {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return <Component {...props} />;
  };
}

export default withErrorHandling;