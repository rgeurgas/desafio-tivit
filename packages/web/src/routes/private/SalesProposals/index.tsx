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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { useLazyLoadQuery, useMutation } from 'react-relay';

import { SalesProposalsUpsertMutation } from './__generated__/SalesProposalsUpsertMutation.graphql';
import { useMemo, useState } from 'react';
import {
  salesProposalsQuery,
  upsertSalesProposalsMutation,
} from './SalesProposals.gql';
import {
  SalesProposalsQuery,
  SalesProposalsQuery$data,
} from './__generated__/SalesProposalsQuery.graphql';

const SalesProposals = () => {
  const { t } = useTranslation();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const data = useLazyLoadQuery<SalesProposalsQuery>(salesProposalsQuery, {});
  const [upsertSalesProposal] = useMutation<SalesProposalsUpsertMutation>(
    upsertSalesProposalsMutation
  );

  const columns: GridColDef<
    NonNullable<NonNullable<SalesProposalsQuery$data>['SalesProposals']>[number]
  >[] = useMemo(
    () => [
      { field: 'name', headerName: t('salesProposals.name') },
      { field: 'client', headerName: t('salesProposals.client') },
      { field: 'items', headerName: t('salesProposals.items') },
    ],
    []
  );

  return (
    <Box flexGrow={1} height='100%'>
      <AppBar position='static'>
        <Grid2 container px={2} py={1}>
          <Grid2 flexGrow={1}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              {t('drawer.salesProposals')}
            </Typography>
          </Grid2>
          <Grid2>
            <Button
              color='inherit'
              onClick={() => {
                setDialogOpen(true);
                setName('');
                setClient('');
                setItems([]);
              }}
            >
              {t('add')}
            </Button>
          </Grid2>
        </Grid2>
      </AppBar>
      <Grid2 container height='calc(100% - 52.5px)'>
        <Grid2 flexGrow={1}>
          {data.SalesProposals && (
            <DataGrid
              disableRowSelectionOnClick
              rows={data.SalesProposals}
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
        <DialogTitle>{t('salesProposals.title')}</DialogTitle>
        <Stack padding={2} spacing={2}>
          <TextField
            required
            fullWidth
            error={error && name === ''}
            label={t('salesProposals.name')}
            placeholder={t('salesProposals.namePlaceholder')}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id='select-label-client'>
              {t('salesProposals.client')}
            </InputLabel>
            <Select
              required
              labelId='select-label-client'
              id='select-client'
              error={error && client === ''}
              label={t('salesProposals.client')}
              value={client}
              onChange={(event) => setClient(event.target.value)}
            >
              {data.Clients!.map((client) => (
                <MenuItem value={client.id}>{`${client.name}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='select-label-items'>
              {t('salesProposals.items')}
            </InputLabel>
            <Select
              required
              multiple
              labelId='select-label-items'
              id='select-items'
              error={error && items.length === 0}
              label={t('salesProposals.items')}
              value={items}
              onChange={(event) => {
                console.log(event);
                setItems(event.target.value as string[]);
              }}
            >
              {data.Items!.map((item) => (
                <MenuItem
                  value={item.id}
                >{`${item.name} - R$${item.price}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>{t('cancel')}</Button>
          <Button
            variant='contained'
            onClick={() =>
              upsertSalesProposal({
                variables: {
                  name,
                  client,
                  items,
                },
                onError: () => setError(true),
                onCompleted: (response) => {
                  if (Boolean(response.upsertSalesProposals.SalesProposal)) {
                    setDialogOpen(false);
                  } else {
                    setError(true);
                  }
                },
                updater: (store) => {
                  if (!Boolean(false)) {
                    const payload = store.getRootField('upsertSalesProposals');
                    const SalesProposal =
                      payload.getLinkedRecord('SalesProposal');

                    const root = store.getRoot();
                    const salesProposals =
                      root.getLinkedRecords('SalesProposals');

                    if (salesProposals) {
                      const newSalesProposals = [
                        ...salesProposals,
                        SalesProposal,
                      ];
                      root.setLinkedRecords(
                        newSalesProposals,
                        'SalesProposals'
                      );
                    } else {
                      root.setLinkedRecords([SalesProposal], 'SalesProposals');
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

export default SalesProposals;
