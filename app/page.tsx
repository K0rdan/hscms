// import RecipeFilters from '@/components/RecipeFilters';
// import RecipeList from '@/components/RecipeList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h2" component="h1" gutterBottom color="primary">
          My Best Recipes
        </Typography>
        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
          >
            {/* <RecipeFilters /> */}
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Suspense fallback={<Typography>Loading recipes...</Typography>}>
              {/* <RecipeList /> */}
            </Suspense>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
