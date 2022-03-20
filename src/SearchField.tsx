import { FormEvent, useContext, useState } from 'react';
import { ArrowForward as ArrowForwardIcon, Search as SearchIcon } from '@mui/icons-material';
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import axios from 'axios';
import SearchContext from './contexts/SearchContext';
import { OmdbSearchResponse } from './types';

const StyledSearchInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.common.white,
    '& fieldset': {
      border: '0',
    },
  },
  width: '100%',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

export default function SearchField() {
  const [search, setSearch] = useState('');

  const { setSearchResult } = useContext(SearchContext)

  const fetchResult = async (e: FormEvent) => {
    e.preventDefault();

    const formattedSearch = search.split(' ').join('+');

    const result = await axios.get<OmdbSearchResponse>(
      `${import.meta.env.VITE_API_ENDPOINT}&s=${formattedSearch}`,
    );

    setSearchResult(result.data.Search);
  };

  return (
    <form onSubmit={fetchResult}>
      <Autocomplete
        options={[]}
        renderInput={(params) => (
          <StyledSearchInput
            {...params}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search a movie…"
            InputProps={{
              type: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{
                    color: blue[100],
                    marginLeft: 1,
                  }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="submit search" type="submit">
                    <ArrowForwardIcon sx={{ color: blue[100] }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
        forcePopupIcon={false}
        aria-label="search"
      />
    </form>
  );
}
