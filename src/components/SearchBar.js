import React from 'react';
import { TextField } from '@mui/material';

// Functional component for the search bar
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      margin="normal"
    />
  );
};

export default SearchBar;
