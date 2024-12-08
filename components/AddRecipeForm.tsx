'use client';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';

interface Recipe {
  id: string;
  title: string;
  prepTime: number;
  cookTime: number;
  difficulty: string;
  category: string;
  ingredients: string;
  instructions: string;
  imageUrl: string;
}

interface AddRecipeFormProps {
  onAddRecipe: (recipe: Recipe) => void;
}

export default function AddRecipeForm({ onAddRecipe }: AddRecipeFormProps) {
  const [recipe, setRecipe] = useState<Recipe>({
    id: '',
    title: '',
    prepTime: 0,
    cookTime: 0,
    difficulty: '',
    category: '',
    ingredients: '',
    instructions: '',
    imageUrl: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name as string]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });
      if (response.ok) {
        const newRecipe = await response.json();
        onAddRecipe(newRecipe);
      } else {
        console.error('Failed to add recipe');
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ '& > :not(style)': { m: 1 } }}
    >
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={recipe.title}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Prep Time (minutes)"
        name="prepTime"
        type="number"
        value={recipe.prepTime}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Cook Time (minutes)"
        name="cookTime"
        type="number"
        value={recipe.cookTime}
        onChange={handleChange}
        required
      />
      <FormControl fullWidth>
        <InputLabel>Difficulty</InputLabel>
        <Select
          name="difficulty"
          value={recipe.difficulty}
          // onChange={handleChange}
          required
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={recipe.category}
          // onChange={handleChange}
          required
        >
          <MenuItem value="breakfast">Breakfast</MenuItem>
          <MenuItem value="lunch">Lunch</MenuItem>
          <MenuItem value="dinner">Dinner</MenuItem>
          <MenuItem value="dessert">Dessert</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Ingredients"
        name="ingredients"
        multiline
        rows={4}
        value={recipe.ingredients}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Instructions"
        name="instructions"
        multiline
        rows={4}
        value={recipe.instructions}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Image URL"
        name="imageUrl"
        value={recipe.imageUrl}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Recipe
      </Button>
    </Box>
  );
}
