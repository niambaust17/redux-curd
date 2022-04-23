import React from 'react';
import './style.css';
import Posts from './components/Posts/Posts';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import { Breadcrumbs, Box, Link } from '@mui/material';
import AddPost from './pages/AddPost/AddPost';
import UpdatePost from './pages/UpdatePost/UpdatePost';

export default function App()
{
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="none" color="inherit" href="/">
            Home
          </Link>
          <Link underline="none" color="inherit" href="/posts">
            All Posts
          </Link>
          <Link underline="none" color="inherit" href="/posts/new">
            Add Post
          </Link>
        </Breadcrumbs>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="posts/new" element={<AddPost />} />
        <Route path="posts/update/:id" element={<UpdatePost />} />
      </Routes>
    </>
  );
}
