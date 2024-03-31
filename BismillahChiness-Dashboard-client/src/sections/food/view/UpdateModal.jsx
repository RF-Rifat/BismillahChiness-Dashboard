/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable perfectionist/sort-imports */
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { BASE_URL } from 'src/hooks/useGetData';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UpdateModal({ openModal, refetch, handleCloseModal, post }) {
  const { _id, imageSrc, price, title, description, category } = post;

  // Initialize state variables with default values from post prop
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageSrc, setNewImageSrc] = useState('');
  const [newCategory, setNewCategory] = useState('');

  // Set default values when the post prop changes
  useEffect(() => {
    if (post) {
      setNewTitle(title);
      setNewPrice(price);
      setNewDescription(description);
      setNewImageSrc(imageSrc);
      setNewCategory(category);
    }
  }, [category, description, imageSrc, post, price, title]);

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };
  const handlePriceChange = (event) => {
    setNewPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleImgSrcChange = (event) => {
    setNewImageSrc(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleUpdateFood = async () => {
    try {
      const newFoodData = {
        title: newTitle,
        description: newDescription,
        imageSrc: newImageSrc,
        category: newCategory,
      };
      const response = await fetch(`${BASE_URL}/api/food/${_id}`, {
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
          <Typography variant="h6">Update Food</Typography>

          <TextField
            label="Title"
            variant="outlined"
            value={newTitle}
            onChange={handleTitleChange}
          />
          <TextField
            label="Title"
            variant="outlined"
            value={newPrice}
            onChange={handlePriceChange}
          />
          <TextField
            label="Description"
            variant="outlined"
            value={newDescription}
            onChange={handleDescriptionChange}
          />
          <TextField
            label="Image Source"
            variant="outlined"
            value={newImageSrc}
            onChange={handleImgSrcChange}
          />
          <TextField
            label="Category"
            variant="outlined"
            value={newCategory}
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
