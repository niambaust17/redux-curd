import { TextField, Box, Button } from "@mui/material";
import { useAddPostMutation } from "../../services/posts";
import { useState } from 'react';

const AddPost = () =>
{
    const [addPost] = useAddPostMutation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const post = {
        "id": Math.floor(Math.random() * 1000) + 11,
        "title": title,
        "description": description,
        "author": author,
    }

    const addPostHandler = async (e) =>
    {
        e.preventDefault();
        await addPost(post);
        e.target.reset();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: '400px' }}>
                <form onSubmit={addPostHandler}>
                    <TextField
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        label="Post Title"
                        margin="normal"
                        placeholder="Post Title"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        required
                    />
                    <TextField
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        label="Post Description"
                        margin="normal"
                        placeholder="Post Description"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        required
                    />
                    <TextField
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        label="Author"
                        margin="normal"
                        placeholder="Author"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        required
                    />
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="outlined"
                            color="success"
                            type="submit"
                        >
                            Add Post
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default AddPost