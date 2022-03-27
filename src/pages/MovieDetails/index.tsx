import {
  Box,
  CircularProgress,
  Container,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  useMediaQuery,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OmdbIdSearchResponse } from '~/types';

export default function MovieDetails() {
  const [movieData, setMovieData] = useState<OmdbIdSearchResponse | null>(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get<OmdbIdSearchResponse>(`${import.meta.env.VITE_API_ENDPOINT}&i=${id}`)
      .then((response) => setMovieData(response.data))
      .catch(() => navigate('/'));
  }, []);

  if (!movieData) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '25vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const {
    Poster,
    Ratings,
    Response,
    ...rows
  } = movieData;

  const PosterContainer = styled('img')(() => ({
    objectFit: 'contain',
  }));

  return (
    <Container
      maxWidth="lg"
      sx={(theme) => ({
        my: 6,
        display: 'flex',
        flexDirection: useMediaQuery(theme.breakpoints.not('xs')) ? 'row' : 'column',
        alignItems: useMediaQuery(theme.breakpoints.not('xs')) ? 'flex-start' : 'center',
        gap: 5,
      })}
    >
      <PosterContainer
        src={movieData.Poster}
        alt={`${movieData.Title} poster`}
      />

      <TableContainer>
        <Table>
          <TableBody>
            {Object.entries(rows)
              .filter(([, value]) => value !== 'N/A')
              .map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
