import { Container, Stack } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '~/contexts/SearchContext';
import MovieCard from './MovieCard';

export default function Movies() {
  const { searchResult } = useContext(SearchContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.entries(searchResult).length === 0) {
      navigate('/');
    }
  }, []);

  return (
    <Container maxWidth="lg" sx={{ my: 6, display: 'flex', justifyContent: 'center' }}>
      <Stack
        spacing={2}
        sx={(theme) => ({ width: '100%', maxWidth: theme.breakpoints.values.sm })}
      >
        {searchResult.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Stack>
    </Container>
  );
}
