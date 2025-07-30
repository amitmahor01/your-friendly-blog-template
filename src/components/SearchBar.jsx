import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Search } from '@mui/icons-material';

export default function SearchBar({ placeholder = "Search articles...", sx = {} }) {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      variant="outlined"
      sx={{ maxWidth: 500, ...sx }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
} 