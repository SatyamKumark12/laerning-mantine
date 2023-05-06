"use client"

import { useState } from "react";
import {  useMutation } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { useRouter } from 'next/router';
import { Button, TextInput, Text } from '@mantine/core';

const LOGIN_MUTATION = gql`
  mutation Mutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
      }
    }
  }
`;

const LoginForm = () => {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { error , loading , data }] = useMutation(LOGIN_MUTATION , {
    onCompleted(data){
      localStorage.setItem("token",data.authenticateUserWithPassword.sessionToken);
      // router.push('/');
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });
      localStorage.setItem('token', data.authenticateUserWithPassword.sessionToken);
      console.log(data);
      // router.push('/');
    } catch (error) {
      console.error(error);
    }
    console.log({ email, password });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: 'sm', padding: '6px', background: 'white', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        {error && <div style={{ background: '#f44336', padding: '8px', marginBottom: '16px' }}><Text color="white">{error.message}</Text></div>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>
              Email
            </label>
            <TextInput
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>
              Password
            </label>
            <TextInput
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            style={{ background: '#2196f3', color: 'white', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}
            variant="light"
            loading={loading}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;


// "use client"

// import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
// import { useForm } from '@mantine/form';
// import { useMutation, gql } from '@apollo/client';

// interface FormValues {
//     email: string;
//     password: string;
//   }

// const CREATE_USER_MUTATION = gql`
// mutation Mutation($email: String!, $password: String!) {
//     authenticateUserWithPassword(email: $email, password: $password) {
//       ... on UserAuthenticationWithPasswordSuccess {
//         sessionToken
//       }
//     }
//   }
// `;

// const Forms = () => {
//   const form = useForm<FormValues>({
//     initialValues: {
//       email: '',
//       password: '',
//     },

//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//     },
//   });

//   const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
//     onCompleted(data){
//         localStorage.setItem("token",data.authenticateUserWithPassword.sessionToken)
//         // router.push('/');
//     }
//   });

//   const handleSubmit = (values: FormValues) => {
//     createUser({ variables: values })
//       .then(() => {
//         console.log('User created successfully');
//         form.reset();
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <Box maw={300} mx="auto">
//       <form onSubmit={form.onSubmit(handleSubmit)}>
//         <TextInput
//           withAsterisk
//           label="Email"
//           placeholder="your@email.com"
//           {...form.getInputProps('email')}
//         />

//         <TextInput
//           withAsterisk
//           label="Password"
//           placeholder="Password"
//           {...form.getInputProps('password')}
//         />

//         {/* <Checkbox
//           mt="md"
//           label="I agree to sell my privacy"
//           {...form.getInputProps('termsOfService', { type: 'checkbox' })}
//         /> */}

//         <Group position="right" mt="md">
//           <Button type="submit" loading={loading}>
//             Submit
//           </Button>
//         </Group>
//       </form>

//       {error && (
//         <Box mt="md" color="red">
//           {error.message}
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default Forms;




