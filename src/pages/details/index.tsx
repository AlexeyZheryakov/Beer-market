import React from 'react';
import { useParams } from 'react-router-dom';
import Api from 'Api/beer';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  Api.getDetailsBeer(id).then((data) => console.log(data.data));
  return (
    <>
      <h2>Details {id}</h2>
    </>
  );
};

export default Details;
