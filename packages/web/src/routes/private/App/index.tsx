import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Outlet, useNavigate } from 'react-router-dom';

const App = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box height='100%'>
      <Drawer open variant='permanent'>
        <List sx={{ width: 300 }}>
          <ListItem key='items' disablePadding>
            <ListItemButton onClick={() => navigate('/app/items')}>
              <ListItemText primary={t('drawer.items')} />
            </ListItemButton>
          </ListItem>
          <ListItem key='clients' disablePadding>
            <ListItemButton onClick={() => navigate('/app/clients')}>
              <ListItemText primary={t('drawer.clients')} />
            </ListItemButton>
          </ListItem>
          <ListItem key='salesproposals' disablePadding>
            <ListItemButton onClick={() => navigate('/app/salesproposals')}>
              <ListItemText primary={t('drawer.salesProposals')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box pl='300px' height='100%'>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
