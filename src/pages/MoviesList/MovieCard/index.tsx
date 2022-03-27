import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardActionArea,
  styled,
  Typography,
} from '@mui/material';
import { OmdbSearchResult } from '~/types';

type Props = {
  movie: OmdbSearchResult;
};

const CroppedPoster = styled('img')(({ theme }) => ({
  maxHeight: theme.spacing(12),
  maxWidth: theme.spacing(12),
}));

function MovieInfo({ movie }: Props) {
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
            {`${key}:`}
          </Typography>

          <Typography>
            {value}
          </Typography>
        </Box>
      ))}
    </>
  );
}

export default function MovieCard({ movie }: Props) {
  const navigate = useNavigate();

  return (
    <CardActionArea>
      <Card
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
        }}
        onClick={() => navigate(`/movies/${movie.imdbID}`)}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            width: theme.spacing(12),
            height: theme.spacing(12),
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <CroppedPoster src={movie.Poster} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <MovieInfo movie={movie} />
        </Box>
      </Card>
    </CardActionArea>
  );
}
