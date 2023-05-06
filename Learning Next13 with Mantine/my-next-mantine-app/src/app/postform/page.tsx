'use client'
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { TextInput, Button, Alert, Loader } from '@mantine/core';


const CREATE_POST = gql`
  mutation CreateNewPost($data: PostCreateInput!) {
    createPost(data: $data) {
      id
      title
    }
  }
`;


const NewPostForm = () => {
    const [createPost, { loading, error, data }] = useMutation(CREATE_POST);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        const result = await createPost({
          variables: { data: { title } },
        });
  
        console.log(result.data);
  
        if (result.data.createPost) {
          // Do something on success
        }
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {loading && <Loader />}
        {error && <Alert color="red">{error.message}</Alert>}
        {data && data.createPost && (
          <Alert color="blue">{data.createPost.title} created!</Alert>
        )}
  
        <TextInput
          label="Title"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
    
        <Button type="submit" variant="filled" color="blue">
          Create Post
        </Button>
      </form>
    );
  };

export default NewPostForm;