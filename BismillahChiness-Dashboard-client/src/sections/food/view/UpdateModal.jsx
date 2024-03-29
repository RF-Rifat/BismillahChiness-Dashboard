/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable perfectionist/sort-imports */
import { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { BASE_URL } from 'src/hooks/useGetData';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UpdateModal({ id, openModal, refetch, handleCloseModal }) {
  const [foodName, setFoodName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [category, setCategory] = useState('');
  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImgSrcChange = (event) => {
    setImageSrc(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleUpdateFood = async () => {
    try {
      const newFoodData = {
        foodName,
        title,
        description,
        imageSrc,
        category,
      };
      console.log(newFoodData);
      const response = await fetch(`${BASE_URL}/api/food/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFoodData),
      });
      if (!response.ok) {
        throw new Error('Failed to update food. Please try again later.');
      }
      console.log('Food updated successfully:', newFoodData);
      refetch();
      handleCloseModal();
    } catch (error) {
      console.error('Error updating food:', error.message);
    }
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Container>
        <Stack
          spacing={3}
          p={4}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 4,
            width: 400,
          }}
        >
          <Typography variant="h6">Add Food</Typography>
          <TextField
            label="Food Name"
            variant="outlined"
            value={foodName}
            onChange={handleFoodNameChange}
          />
          <TextField label="Title" variant="outlined" value={title} onChange={handleTitleChange} />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
          />
          <TextField
            label="Image Source"
            variant="outlined"
            value={imageSrc}
            onChange={handleImgSrcChange}
          />
          <TextField
            label="Category"
            variant="outlined"
            value={category}
            onChange={handleCategoryChange}
          />
          <Button variant="contained" onClick={handleUpdateFood}>
            Update
          </Button>
        </Stack>
      </Container>
    </Modal>
  );
}
