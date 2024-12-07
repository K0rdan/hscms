'use client'

import { useState } from 'react'
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  TextField, 
  Typography, 
  Box,
  Paper
} from '@mui/material'

export default function RecipeFilters() {
  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [category, setCategory] = useState('')

  const handleFilterChange = (filterType: string, value: string) => {
    // Implement filter logic here
    console.log(`Filter changed: ${filterType} = ${value}`)
    // You would typically call an API or update the RecipeList component here
  }

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom color="primary">
        Filters
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Prep Time</InputLabel>
        <Select
          value={prepTime}
          label="Prep Time"
          onChange={(e) => {
            setPrepTime(e.target.value)
            handleFilterChange('prepTime', e.target.value)
          }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="15">Up to 15 minutes</MenuItem>
          <MenuItem value="30">Up to 30 minutes</MenuItem>
          <MenuItem value="60">Up to 1 hour</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Cook Time</InputLabel>
        <Select
          value={cookTime}
          label="Cook Time"
          onChange={(e) => {
            setCookTime(e.target.value)
            handleFilterChange('cookTime', e.target.value)
          }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="15">Up to 15 minutes</MenuItem>
          <MenuItem value="30">Up to 30 minutes</MenuItem>
          <MenuItem value="60">Up to 1 hour</MenuItem>
          <MenuItem value="90">Up to 1.5 hours</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Difficulty</InputLabel>
        <Select
          value={difficulty}
          label="Difficulty"
          onChange={(e) => {
            setDifficulty(e.target.value)
            handleFilterChange('difficulty', e.target.value)
          }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => {
            setCategory(e.target.value)
            handleFilterChange('category', e.target.value)
          }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="breakfast">Breakfast</MenuItem>
          <MenuItem value="lunch">Lunch</MenuItem>
          <MenuItem value="dinner">Dinner</MenuItem>
          <MenuItem value="dessert">Dessert</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        margin="normal"
        label="Ingredients"
        placeholder="Search by ingredients"
        onChange={(e) => handleFilterChange('ingredients', e.target.value)}
      />
    </Paper>
  )
}

