import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import Landing from './pages/Landing';
import MovieDetails from './pages/MovieDetails';
import MoviesList from './pages/MoviesList';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Landing />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
