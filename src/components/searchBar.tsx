import { Grid, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';


const SearchBar: React.FunctionComponent = () => {
    return (
        <OutlinedInput
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
            placeholder="Search"
            fullWidth
        />
    );
}


export default SearchBar;