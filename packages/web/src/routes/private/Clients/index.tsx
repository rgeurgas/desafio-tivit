import {
  Box,
  AppBar,
  Typography,
  Button,
  Grid2,
  Dialog,
  Stack,
  DialogTitle,
  TextField,
  DialogActions,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { useLazyLoadQuery, useMutation } from 'react-relay';

import { ClientsUpsertMutation } from './__generated__/ClientsUpsertMutation.graphql';
import { useMemo, useState } from 'react';
import { clientsQuery, upsertClientsMutation } from './Clients.gql';
import {
  ClientsQuery,
  ClientsQuery$data,
} from './__generated__/ClientsQuery.graphql';

const Clients = () => {
  const { t } = useTranslation();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const data = useLazyLoadQuery<ClientsQuery>(clientsQuery, {});
  const [upsertClient] = useMutation<ClientsUpsertMutation>(
    upsertClientsMutation
  );

  const columns: GridColDef<
    NonNullable<NonNullable<ClientsQuery$data>['Clients']>[number]
  >[] = useMemo(
    () => [
      { field: 'name', headerName: t('clients.name') },
      { field: 'email', headerName: t('clients.email') },
    ],
    []
  );

  return (
    <Box flexGrow={1} height='100%'>
      <AppBar position='static'>
        <Grid2 container px={2} py={1}>
          <Grid2 flexGrow={1}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              {t('drawer.clients')}
            </Typography>
          </Grid2>
          <Grid2>
            <Button
              color='inherit'
              onClick={() => {
                setDialogOpen(true);
                setName('');
                setEmail('');
                setPassword('');
              }}
            >
              {t('add')}
            </Button>
          </Grid2>
        </Grid2>
      </AppBar>
      <Grid2 container height='calc(100% - 52.5px)'>
        <Grid2 flexGrow={1}>
          {data.Clients && (
            <DataGrid
              disableRowSelectionOnClick
              rows={data.Clients}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 20,
                  },
                },
              }}
              pageSizeOptions={[20]}
            />
          )}
        </Grid2>
      </Grid2>
      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <DialogTitle>{t('clients.title')}</DialogTitle>
        <Stack padding={2} spacing={2}>
          <TextField
            fullWidth
            error={error && name === ''}
            label={t('clients.name')}
            placeholder={t('clients.namePlaceholder')}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            fullWidth
            error={error && email === ''}
            label={t('clients.email')}
            placeholder={t('clients.emailPlaceholder')}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            fullWidth
            error={error && password === ''}
            inputMode='decimal'
            label={t('clients.password')}
            placeholder={t('clients.passwordPlaceholder')}
            value={password}
            type='password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </Stack>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>{t('cancel')}</Button>
          <Button
            variant='contained'
            onClick={() =>
              upsertClient({
                variables: {
                  name,
                  email,
                  password,
                },
                onError: () => setError(true),
                onCompleted: (response) => {
                  if (Boolean(response.upsertClient.Client)) {
                    setDialogOpen(false);
                  } else {
                    setError(true);
                  }
                },
                updater: (store) => {
                  if (!Boolean(false)) {
                    const payload = store.getRootField('upsertClient');
                    const Client = payload.getLinkedRecord('Client');

                    const root = store.getRoot();
                    const clients = root.getLinkedRecords('Clients');

                    if (clients) {
                      const newClients = [...clients, Client];
                      root.setLinkedRecords(newClients, 'Clients');
                    } else {
                      root.setLinkedRecords([Client], 'Clients');
                    }
                  }
                },
              })
            }
          >
            {t('add')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Clients;
