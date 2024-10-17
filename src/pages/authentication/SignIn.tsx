import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import paths, { rootPaths } from 'routes/paths';
import LogoHeader from 'layouts/main-layout/sidebar/LogoHeader';
import IconifyIcon from 'components/base/IconifyIcon';
import PasswordTextField from 'components/common/PasswordTextField';
import supa from 'providers/supabase';

// Initialize Supabase client
const supabaseUrl = supa.url; // replace with your Supabase project URL
const supabaseAnonKey = supa.anonkey; // replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const checkBoxLabel = { inputProps: { 'aria-label': 'Checkbox' } };

const SignIn = () => {


  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: SyntheticEvent) => {
    console.log("eheo")
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // On successful login, navigate to the root path
      navigate(rootPaths.root);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <LogoHeader sx={{ justifyContent: 'center', mb: 5 }} />

      <Paper sx={{ p: 5 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'center' }}
          justifyContent="space-between"
          spacing={1}
        >
          <Typography variant="h3">Sign in</Typography>
          <Typography variant="subtitle2" color="neutral.main">
            or{' '}
            <Link href={paths.signup} underline="hover">
              Create an account
            </Link>
          </Typography>
        </Stack>

        {error && <Typography color="error">{error}</Typography>}

        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordTextField
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ sm: 'center' }}
            justifyContent="space-between"
            mt={1}
            spacing={0.5}
          >
            <FormControlLabel
              control={<Checkbox {...checkBoxLabel} color="primary" />}
              label={<Typography variant="subtitle1">Remember me</Typography>}
            />

            <Typography variant="subtitle2" color="primary">
              <Link href="#!" underline="hover">
                Forgot password?
              </Link>
            </Typography>
          </Stack>

          <Button onClick={handleSubmit} type="button" size="large" variant="contained" sx={{ mt: 2 }} fullWidth>
            Sign in
          </Button>

          <Divider sx={{ color: 'neutral.main', my: 2 }}>
            <Typography variant="subtitle2"> or sign in with</Typography>
          </Divider>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconifyIcon icon="devicon:google" />}
                sx={{ color: 'error.main', borderColor: 'error.main' }}
                fullWidth
                onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
              >
                <Typography>Google</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconifyIcon icon="logos:facebook" />}
                sx={{ color: 'primary.light', borderColor: 'primary.light' }}
                fullWidth
                onClick={() => supabase.auth.signInWithOAuth({ provider: 'facebook' })}
              >
                <Typography>Facebook</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
