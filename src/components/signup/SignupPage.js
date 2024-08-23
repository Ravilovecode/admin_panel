import React, { useState } from 'react';
import { TextField, Button, Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme'; // Adjust the path as needed

const SignupPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: colors.primary[400],
        padding: '20px',
      }}
    >
      <Typography variant="h4" color={colors.grey[100]} mb={2}>
        Sign Up
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2, width: '100%', maxWidth: '400px' }}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2, width: '100%', maxWidth: '400px' }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2, width: '100%', maxWidth: '400px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignup}
        sx={{ width: '100%', maxWidth: '400px' }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignupPage;
