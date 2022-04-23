import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../services/posts';

const PostDetail = () =>
{
  const { id } = useParams();
  const { data, isLoading } = useGetPostQuery(id);

  return (
    <>
      <h2>Post - {id}</h2>
      {
        !isLoading && <>
          <h3>Title: {data.title}</h3>
          <h4>Author: {data.author}</h4>
          <p>Description: {data.description}</p>
        </>
      }
    </>
  );
};
export default PostDetail;
