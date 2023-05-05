"use client"
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useMutation } from '@apollo/client';


const FormSet = () => {

    

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
    validate: {
        name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
    
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      notifications.show({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  const handleSubmit = (values: typeof form.values) => {
  

  };


  return (
    <Box maw={320} mx="auto">
    <form onSubmit={form.onSubmit(console.log, handleError)}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <TextInput mt="md" label="Password" placeholder="Password" {...form.getInputProps('email')} />

      <Group position="center" mt="xl">
        <Button>
          Set random values
        </Button>
      </Group>
      </form>
    </Box>
  );
}

export default FormSet;