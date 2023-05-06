"use client"
import { useState } from 'react';
import { gql , useMutation } from "@apollo/client";
import { Button, TextInput } from '@mantine/core';

interface User {
    id: number;
    name: string;
    email: string;
    password: {
      isSet: boolean;
    };
  }
  

const UPDATE_USER = gql`
  mutation Mutation($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    updateUser(where: $where, data: $data) {
      id
      name
      email
      password {
        isSet
      }
    }
  }
`;

const EditUser = (user: User) => {
  const [updateUser, { loading, error, data }] = useMutation(UPDATE_USER);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const result = await updateUser({
        variables: { where: { id: user.id }, data: { name, email, password } },
      });
      
      console.log(result.data);

      if (result.data.updateUser) {

      }

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <TextInput
          label="Password"
          placeholder="Enter your new password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update'}
        </Button>
      </div>
      {error && <div>{error.message}</div>}
      {data && data.updateUser && <div>User updated successfully</div>}
    </form>
  );
};

export default EditUser;
