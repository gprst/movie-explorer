import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Close as CloseIcon, Search as SearchIcon } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import SearchField from './components/SearchField';
import SearchContext from './contexts/SearchContext';
import { OmdbSearchResult } from './types';

export default function App() {
  const [searchResult, setSearchResult] = useState<OmdbSearchResult[]>([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const theme = useTheme();

  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      <AppBar position="static">
        <Toolbar sx={
          useMediaQuery(theme.breakpoints.up('sm'))
            ? {
              display: 'grid',
              gridTemplateColumns: '1fr 2fr 1fr',
            }
            : {
              display: 'flex',
              gap: 1,
              justifyContent: 'space-between',
            }
        }>
          {!showSearchBar && (
            <Typography variant="h4" component="div">
              Movie explorer
            </Typography>
          )}

          {(useMediaQuery(theme.breakpoints.not('xs')) || showSearchBar) && <SearchField />}

          {useMediaQuery(theme.breakpoints.only('xs')) &&
            <IconButton
              aria-label="submit search"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              {
                showSearchBar
                  ? <CloseIcon sx={{ color: blue[100] }} />
                  : <SearchIcon sx={{ color: blue[100] }} />
              }
            </IconButton>
          }
        </Toolbar>
      </AppBar>

      <Outlet />
    </SearchContext.Provider>
  );
}
