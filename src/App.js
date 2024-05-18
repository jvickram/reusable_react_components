import React from 'react';
import withLoading from './hoc/withLoading';
import withErrorHandling from './hoc/withErrorHandling';
import useFetch from './hooks/useFetch';
import List from './components/List';

const ListWithLoading = withLoading(List);
const ListWithErrorHandling = withErrorHandling(ListWithLoading);

const App = () => {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div>
      <h1>List Component</h1>
      <ListWithErrorHandling data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default App;
