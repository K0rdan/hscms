'use client'

import { useState, useEffect } from 'react'
import { 
  Container, 
  Typography, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton 
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddRecipeForm from './AddRecipeForm'

interface Recipe {
  id: string
  title: string
}

export default function AdminPanel() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    // Fetch recipes from the API
    fetch('/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
  }, [])

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe])
    setShowAddForm(false)
  }

  const handleEditRecipe = (id: string) => {
    // Implement edit functionality
    console.log(`Editing recipe with id: ${id}`)
  }

  const handleDeleteRecipe = (id: string) => {
    // Implement delete functionality
    console.log(`Deleting recipe with id: ${id}`)
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Panel
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setShowAddForm(true)}
        style={{ marginBottom: '1rem' }}
      >
        Add New Recipe
      </Button>
      {showAddForm && <AddRecipeForm onAddRecipe={handleAddRecipe} />}
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id}>
            <ListItemText primary={recipe.title} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEditRecipe(recipe.id)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteRecipe(recipe.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

