import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPostQuery, useUpdatePostMutation } from "../../services/posts";

const UpdatePost = () =>
{
    const { id } = useParams();
    const [updatePost] = useUpdatePostMutation();
    const { data, isLoading } = useGetPostQuery(id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const updatedPost = {
        "id": !isLoading && data?.id,
        "title": title.length === 0 ? data?.title : title,
        "description": description.length === 0 ? data?.description : description,
        "author": author.length === 0 ? data?.author : author,
    }

    const updatePostHandler = async () =>
    {
        await updatePost(updatedPost);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {!isLoading ?
                <Box sx={{ maxWidth: '400px' }}>
                    <form onSubmit={updatePostHandler}>
                        <TextField
                            onChange={(e) => setTitle(e.target.value)}
                            defaultValue={data.title}
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
                            defaultValue={data?.description}
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
                            defaultValue={data?.author}
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
                                type="submit"
                            >
                                Update Post
                            </Button>
                        </Box>
                    </form>
                </Box>
                : <h1>Loading...</h1>
            }
        </div>
    )
}

export default UpdatePost