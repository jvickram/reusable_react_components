import React from 'react';

const List = ({ data }) => {
  console.log("data ",data)
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;