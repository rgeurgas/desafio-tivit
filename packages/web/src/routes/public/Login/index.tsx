import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Grid2,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-relay';

import { LoginMutation } from './__generated__/LoginMutation.graphql';
import { loginMutation } from './Login.gql';
import { useCookies } from 'react-cookie';

const Login = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [login] = useMutation<LoginMutation>(loginMutation);
  const [_, setCookie] = useCookies(['Bearer']);

  const validateInput = () => {
    setError(false);

    if (email === '' || password === '') {
      setError(true);
    } else {
      login({
        variables: {
          email,
          password,
        },
        onError: () => setError(true),
        onCompleted: (response) => {
          if (Boolean(response.login?.token)) {
            setCookie('Bearer', response.login!.token, { path: '/' });
          } else if (Boolean(response.login?.error)) {
            setError(true);
          }
        },
      });
    }
  };

  return (
    <Grid2
      container
      width='100%'
      height='100%'
      justifyContent='center'
      alignItems='center'
    >
      <Grid2>
        <Card sx={{ maxWidth: '50%', minWidth: 400 }}>
          <CardContent sx={{ p: 3 }}>
            <Stack alignItems='center' spacing={2}>
              <TextField
                fullWidth
                error={error && email === ''}
                inputMode='email'
                label={t('login.email')}
                placeholder={t('login.emailPlaceholder')}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') validateInput();
                }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                fullWidth
                error={error && password === ''}
                type='password'
                label={t('login.password')}
                placeholder={t('login.passwordPlaceholder')}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') validateInput();
                }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Stack
                width='100%'
                direction='row'
                alignItems='stretch'
                spacing={2}
              >
                <Button
                  fullWidth
                  variant='outlined'
                  // onClick={validateInput}
                >
                  {t('login.register')}
                </Button>
                <Button
                  fullWidth
                  variant='contained'
                  color='primary'
                  onClick={validateInput}
                >
                  {t('login.login')}
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Login;
