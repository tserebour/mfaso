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
import paths, { rootPaths } from 'routes/paths';
import IconifyIcon from 'components/base/IconifyIcon';
import PasswordTextField from 'components/common/PasswordTextField';
import LogoHeader from 'layouts/main-layout/sidebar/LogoHeader';
import { createClient } from '@supabase/supabase-js';
import supa from 'providers/supabase';



const checkBoxLabel = { inputProps: { 'aria-label': 'Checkbox' } };

const supabaseUrl = supa.url; // replace with your Supabase project URL
const supabaseAnonKey = supa.anonkey; // replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (event: SyntheticEvent) => {
    console.log("helo")
    event.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      // On successful sign-up, navigate to the root path
      navigate(paths.signin);
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
        <Typography variant="h3">Sign up</Typography>
        <Typography variant="subtitle2" color="neutral.main">
          Have an account?{' '}
          <Link href={paths.signin} underline="hover">
            Sign in
          </Link>
        </Typography>
      </Stack>

      {error && <Typography color="error">{error}</Typography>}

      <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

        <FormControlLabel
          control={<Checkbox {...checkBoxLabel} color="primary" />}
          label={
            <Typography variant="subtitle2" whiteSpace="nowrap">
              Accept{' '}
              <Link href="#!" underline="hover" sx={{ fontWeight: 'fontWeightBold' }}>
                terms
              </Link>{' '}
              &{' '}
              <Link href="#!" underline="hover" sx={{ fontWeight: 'fontWeightBold' }}>
                privacy policy
              </Link>
            </Typography>
          }
          sx={{ mt: 2 }}
        />

        <Button type="submit" size="large" variant="contained" sx={{ mt: 2 }} fullWidth>
          Sign up
        </Button>

        <Divider sx={{ color: 'neutral.main', my: 2 }}>
          <Typography variant="subtitle2">or sign up with</Typography>
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

export default SignUp;
