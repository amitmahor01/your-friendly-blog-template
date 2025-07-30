import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NewsletterSignup({ 
  title = "Stay Updated",
  description = "Get the latest articles and insights delivered to your inbox.",
  placeholder = "Enter your email",
  buttonText = "Subscribe"
}) {
  return (
    <Box sx={{ mt: 8, p: 4, bgcolor: 'grey.50', borderRadius: 2, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, maxWidth: 400, mx: 'auto' }}>
        <TextField
          placeholder={placeholder}
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1 }}
        />
        <Button variant="contained" size="small">
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
} 