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

import {
  ItemsQuery,
  ItemsQuery$data,
} from './__generated__/ItemsQuery.graphql';
import { itemsQuery, upsertItemsMutation } from './Items.gql';
import { ItemsUpsertMutation } from './__generated__/ItemsUpsertMutation.graphql';
import { useMemo, useState } from 'react';

const Items = () => {
  const { t } = useTranslation();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDesciption] = useState('');
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(false);

  const data = useLazyLoadQuery<ItemsQuery>(itemsQuery, {});
  const [upsertItem] = useMutation<ItemsUpsertMutation>(upsertItemsMutation);

  const columns: GridColDef<
    NonNullable<NonNullable<ItemsQuery$data>['Items']>[number]
  >[] = useMemo(
    () => [
      { field: 'name', headerName: t('items.name') },
      { field: 'description', headerName: t('items.description') },
      { field: 'price', headerName: t('items.price'), type: 'number' },
    ],
    []
  );

  return (
    <Box flexGrow={1} height='100%'>
      <AppBar position='static'>
        <Grid2 container px={2} py={1}>
          <Grid2 flexGrow={1}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              {t('drawer.items')}
            </Typography>
          </Grid2>
          <Grid2>
            <Button
              color='inherit'
              onClick={() => {
                setDialogOpen(true);
                setName('');
                setDesciption('');
                setPrice(0);
              }}
            >
              {t('add')}
            </Button>
          </Grid2>
        </Grid2>
      </AppBar>
      <Grid2 container height='calc(100% - 52.5px)'>
        <Grid2 flexGrow={1}>
          {data.Items && (
            <DataGrid
              disableRowSelectionOnClick
              rows={data.Items}
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
        <DialogTitle>{t('items.title')}</DialogTitle>
        <Stack padding={2} spacing={2}>
          <TextField
            fullWidth
            error={error && name === ''}
            label={t('items.name')}
            placeholder={t('items.namePlaceholder')}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            fullWidth
            error={error && description === ''}
            label={t('items.description')}
            placeholder={t('items.descriptionPlaceholder')}
            value={description}
            onChange={(event) => setDesciption(event.target.value)}
          />
          <TextField
            fullWidth
            error={error && price <= 0}
            inputMode='decimal'
            label={t('items.price')}
            placeholder={t('items.pricePlaceholder')}
            value={price}
            onChange={(event) =>
              setPrice(
                event.target.value === '' ? 0 : parseFloat(event.target.value)
              )
            }
          />
        </Stack>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>{t('cancel')}</Button>
          <Button
            variant='contained'
            onClick={() =>
              upsertItem({
                variables: {
                  name,
                  description,
                  price,
                },
                onError: () => setError(true),
                onCompleted: (response) => {
                  if (Boolean(response.upsertItem.Item)) {
                    setDialogOpen(false);
                  } else {
                    setError(true);
                  }
                },
                updater: (store) => {
                  if (!Boolean(false)) {
                    const payload = store.getRootField('upsertItem');
                    const Item = payload.getLinkedRecord('Item');

                    const root = store.getRoot();
                    const items = root.getLinkedRecords('Items');

                    if (items) {
                      const newItems = [...items, Item];
                      root.setLinkedRecords(newItems, 'Items');
                    } else {
                      root.setLinkedRecords([Item], 'Items');
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

export default Items;
