import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function Landing() {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      mt: useMediaQuery(theme.breakpoints.not('xs')) ? 12 : 0,
    }}>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Movie explorer 📽️
      </Typography>

      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Start looking for a movie by entering its title in the search bar
      </Typography>
    </Box>
  );
}
