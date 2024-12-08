'use client';

import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface Recipe {
  id: string;
  title: string;
  prepTime: number;
  cookTime: number;
  difficulty: string;
  category: string;
  imageUrl: string;
}

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Fetch recipes from the API
    fetch('/api/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={recipe.imageUrl}
              alt={recipe.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prep: {recipe.prepTime} min | Cook: {recipe.cookTime} min
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Difficulty: {recipe.difficulty}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {recipe.category}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
