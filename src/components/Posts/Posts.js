import { Button, Container, Stack } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDeletePostMutation, useGetPostsQuery } from '../../services/posts';
import PostDetail from '../PostDetail/PostDetail';
import UpdatePost from './../../pages/UpdatePost/UpdatePost';

const Post = () =>
{
  const { data, error, isLoading, isFetching, isSuccess } = useGetPostsQuery();
  const navigate = useNavigate();
  const [deletePost] = useDeletePostMutation();

  const updatePostHandler = async (id) =>
  {
    navigate(`update/${ id }`);
  }

  const deletePostHandler = async (id) =>
  {
    await deletePost(id);
  }

  return (
    <Container>
      <h1>Posts</h1>
      {isLoading && <h1>Loading...</h1>}
      {/* {isFetching && <h1>Fetching</h1>} */}
      {error && <h1>Something Wrong</h1>}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '10px',
        margin: '25px 0'
      }}>
        {isSuccess &&
          data?.map((post) =>
          {
            return (
              <div key={post.id} style={{
                padding: '20px',
                border: '1px solid orange',
                backgroundImage: `url(https://picsum.photos/1280/720?random=${ post.id })`,
                objectFit: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'grid',
                placeItems: 'center',
              }}>
                <h4
                  onClick={() => navigate(`/posts/${ post.id }`)}
                  style={{ cursor: 'pointer', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: '20px' }}
                >
                  {post.title}
                </h4>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" size="small" color="warning" onClick={() => updatePostHandler(post.id)}>Update</Button>
                  <Button variant="contained" size="small" color="error" onClick={() => deletePostHandler(post.id)}>Delete</Button>
                </Stack>
              </div>
            );
          })
        }
      </div>
      <Routes>
        <Route path="id" element={<PostDetail />} />
      </Routes>
    </Container>
  )
}

export default Post