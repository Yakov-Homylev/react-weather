import React from 'react';
import Button from '../UI/Button/Button';
import { Form, SearchInput } from './SearchForm.styled';
import { useForm } from 'react-hook-form';

function SearchForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SearchInput
        defaultValue=""
        {...register('searchInput', { required: true })}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default SearchForm;
