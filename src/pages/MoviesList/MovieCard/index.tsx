import { Box, Card, CardContent, styled, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { OmdbSearchResult } from '~/types';

type Props = {
  movie: OmdbSearchResult;
};

const CroppedPoster = styled('img')(({ theme }) => ({
  maxHeight: theme.spacing(12),
  maxWidth: theme.spacing(12),
}));

const MovieInfo = ({ movie }: Props) => {
  const {
    imdbID,
    Poster,
    ...movieInfo
  } = movie;

  return (
    <>
      {Object.entries(movieInfo).map(([key, value]) => (
        <Box key={key} sx={{ display: 'flex', gap: 1 }}>
          <Typography sx={{ fontWeight: 'bold' }}>
            {key}:
          </Typography>

          <Typography>
            {value}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default function MovieCard({ movie }: Props) {
  return (
    <Card sx={{ padding: 2, display: 'flex', flexDirection: 'row', gap: 2 }}>
      <Box sx={(theme) => ({
        display: 'flex',
        width: theme.spacing(12),
        height: theme.spacing(12),
        alignItems: 'center',
        justifyContent: 'center',
      })}>
        <CroppedPoster src={movie.Poster} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <MovieInfo movie={movie} />
      </Box>
    </Card>
  );
}
